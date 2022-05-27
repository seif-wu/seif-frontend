import { Box } from '@mui/material';
import _ from 'lodash';
import useApiSWR from '../../../lib/core/hooks/useApiSWR';

interface LeetCodeQuestionProgressProps {
  fetchUrl: string;
  width?: number;
  height?: number;
}

type QuestionItemType = {
  difficulty: string;
  total: number;
  accepted: number;
};

interface translateYType {
  translateY: number;
  color: string;
  bgColor: string;
}

interface translateStatusType {
  [propName: string]: translateYType;
}

const translateStatus: translateStatusType = {
  EASY: {
    translateY: 32,
    color: 'rgb(0, 175, 155)',
    bgColor: 'rgba(45,181,93,.15)',
  },
  MEDIUM: {
    translateY: 64,
    color: 'rgb(255, 184, 0)',
    bgColor: 'rgba(255,184,0,.15)',
  },
  HARD: {
    translateY: 96,
    color: 'rgb(239, 71, 67)',
    bgColor: 'rgba(239,71,67,.15)',
  },
};

const LeetCodeQuestionProgress = ({
  fetchUrl,
  width = 300,
  height = 200,
}: LeetCodeQuestionProgressProps) => {
  const { data, error } = useApiSWR(fetchUrl);
  const numQuestions = _.get(data, 'userProfileUserQuestionProgress', {});

  let total = 0;
  let acceptedTotal = 0;

  const renderData = _.reduce(
    numQuestions,
    (result: any, value, key) => {
      _.forEach(value, (item) => {
        if (result[item.difficulty]) {
          result[item.difficulty] = {
            difficulty: item.difficulty,
            accepted:
              key === 'numAcceptedQuestions'
                ? item.count
                : result[item.difficulty].accepted,
            total: item.count + result[item.difficulty].total,
          };
        } else {
          result[item.difficulty] = {
            difficulty: item.difficulty,
            accepted: key === 'numAcceptedQuestions' ? item.count : 0,
            total: item.count,
          };
        }

        if (key === 'numAcceptedQuestions') {
          acceptedTotal += item.count;
        }
        total += item.count;
      });

      return result;
    },
    {}
  );

  return (
    <Box
      component="svg"
      sx={{
        width: '100%',
        height: '100%',
        fontFamily: '"baloo", "Segoe UI", "PingFang SC", Ubuntu, sans-serif',
      }}
      viewBox={`0 0 ${width} ${height}`}
    >
      <rect width="100%" height="100%" fill="#ffffff" />
      <text x="0" y="18" fontSize={12} fill="#333">
        LeeCode 题解
      </text>
      {_.map(renderData, (item: QuestionItemType, key: string) => {
        return (
          <g key={key} transform={`translate(0, ${translateStatus[key].translateY})`}>
            <text x="0" y={0} fill="#333" fontSize={8}>
              {key}
            </text>
            <text
              x="0"
              y={0}
              transform={`translate(${width}, 0)`}
              textAnchor="end"
              fill="#333"
              fontSize={8}
            >
              {item.accepted} / {item.total}
            </text>
            <rect x="0" y={8} width="100%" height="10" fill={translateStatus[key].bgColor} />
            <rect x="0" y={8} width={`${(item.accepted / item.total * 100).toFixed(2)}%`} height="10" fill={translateStatus[key].color} />
          </g>
        );
      })}
    </Box>
  );
};

export default LeetCodeQuestionProgress;
