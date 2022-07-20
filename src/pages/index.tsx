import { useRouter } from 'next/router';
import { Container, Typography } from '@mui/material';
import {
  Info as InfoIcon,
  Dashboard,
  NoteAlt,
  IntegrationInstructions,
  OpenInNewOutlined as OpenInNewOutlinedIcon,
} from '@mui/icons-material';
import BackgroundImage from '@/components/BackgroundImage';
import ContainerWrapper from '@/components/ContainerWrapper';
import {
  SectionBgCard,
  SectionBlurCard,
  SectionContainer,
  SectionFlexBox,
  SectionFlexItemBox,
} from '@/components/Section';
import SeifalUiLogo from '@/components/SeifalUi/Logo';
import TimeClock from '@/components/TimeClock';
import WeclomeTip from '@/components/WeclomeTip';

const iconSx = { width: '45%', minWidth: 48, color: '#fff', flex: 1 };

const HomePage = () => {
  const router = useRouter();
  // TODO 后台可配置
  const backgroundImageSrc =
    'https://images.unsplash.com/photo-1515063312047-b40b86035e20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80';

  // 都有些什么? 列表
  const dashboardList = [
    {
      title: 'Seifal UI 库',
      icon: <SeifalUiLogo style={{ width: '100%', flex: 1 }} color="#fff" />,
      onClick: () => router.push('/seifal-ui'),
    },
    {
      title: '代码片段',
      icon: <IntegrationInstructions sx={iconSx} />,
      disabled: true,
    },
    {
      title: '学习笔记',
      icon: <NoteAlt sx={iconSx} />,
      disabled: true,
    },
  ];

  return (
    <>
      <BackgroundImage src={backgroundImageSrc} />
      <ContainerWrapper>
        <Container maxWidth="xl">
          <TimeClock />
          <WeclomeTip />

          {/* 模块一 */}
          <SectionContainer title="都有些什么?" icon={<Dashboard />}>
            <SectionFlexBox>
              {dashboardList.map((item) => (
                <SectionFlexItemBox key={item.title}>
                  <SectionBlurCard
                    sx={{ height: '100%' }}
                    onClick={() => !item.disabled && item.onClick?.()}
                    disabled={item.disabled}
                  >
                    {item.icon}
                    <Typography variant="subtitle1" sx={{ color: '#fff' }}>
                      {item.title}
                    </Typography>
                  </SectionBlurCard>
                </SectionFlexItemBox>
              ))}
            </SectionFlexBox>
          </SectionContainer>

          {/* 模块二 */}
          <SectionContainer title="关于" icon={<InfoIcon />}>
            {/* .card-grid:hover > .card .card__background */}
            <SectionFlexBox hoverAnimation="other-blur" itemClassNames=".card-background">
              <SectionFlexItemBox span={4}>
                <SectionBgCard
                  onClick={() => router.push('/stats')}
                  title="Leetcode"
                  subTitle="统计"
                  background="https://cdn2.agideo.com/220716/e203286fa255.jpg"
                />
              </SectionFlexItemBox>
              <SectionFlexItemBox span={4}>
                <SectionBgCard
                  onClick={() => window.open('https://github.com/seif-wu')}
                  title="Github"
                  subTitle={
                    <div>
                      Git 仓库 <OpenInNewOutlinedIcon sx={{ fontSize: 14 }} />
                    </div>
                  }
                  background="https://images.unsplash.com/photo-1630514969818-94aefc42ec47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                />
              </SectionFlexItemBox>
            </SectionFlexBox>
          </SectionContainer>
        </Container>
      </ContainerWrapper>
    </>
  );
};

export default HomePage;
