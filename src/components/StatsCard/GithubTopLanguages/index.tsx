import { Box } from '@mui/material';
import _ from 'lodash';
import useApiSWR from '../../../lib/core/hooks/useApiSWR';

export interface GithubTopLanguageProps {
  fetchUrl: string;
  width?: number;
  height?: number;
  top?: number;
}

type LanguageStatsObjType = {
  size: number;
  color: string;
  name: string;
};

const GithubTopLanguage = ({
  fetchUrl,
  width = 300,
  height,
  top = 10,
}: GithubTopLanguageProps) => {
  const { data, error } = useApiSWR(fetchUrl);
  // TODO 添加错误处理

  // 获取所有的仓库
  const repositories = _.get(data, 'user.repositories.nodes', []);

  // 时间复杂度: O(n^2)
  // 空间复杂度: O(n)
  const languageStatsObj = _.reduce(
    repositories,
    function (sum: any, current) {
      const languages = current.languages.edges;
      _.forEach(languages, function (item) {
        if (!sum[item.node.name]) {
          sum[item.node.name] = {
            size: item.size,
            color: item.node.color,
            name: item.node.name,
          };
        } else {
          sum[item.node.name].size += item.size;
        }
      });

      return sum;
    },
    {}
  );

  const languageList = _.chain(Object.values(languageStatsObj))
    .orderBy(['size'], ['desc'])
    .slice(0, top)
    .value() as LanguageStatsObjType[];

  const totalSize = _.sumBy(languageList, (i: LanguageStatsObjType) => i.size);

  // 处理 SVG 高度问题
  let svgHeight = height || 200;
  const singleRowHeight = 45;
  const topRowHeight = singleRowHeight * top;
  if (!height && svgHeight < topRowHeight) {
    svgHeight = topRowHeight;
  }

  return (
    <Box
      component="svg"
      sx={{
        width: '100%',
        height: '100%',
      }}
      viewBox={`0 0 ${width} ${svgHeight}`}
    >
      <rect width="100%" height="100%" fill="#ffffff" />
      <text x="0" y="32" fontSize={12} fill="#333">
        使用最多的语言 TOP {top}(GitHub)
      </text>
      {languageList.map((language, index) => {
        const width = `${((language.size / totalSize) * 100).toFixed(2)}%`;
        const translateY = (index + 1) * 32 + 16;

        return (
          <g key={language.name} transform={`translate(0, ${translateY})`}>
            <text x="0" y={0} fill="#333" fontSize={8}>
              {language.name}
            </text>
            <rect x="0" y={8} width={width} height="10" fill={language.color} />
            <text x={width} y={16} fill="#333" fontSize={6} transform="translate(4)">
              {width}
            </text>
          </g>
        );
      })}
    </Box>
  );
};

export default GithubTopLanguage;
