import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import {
  Dashboard,
  NoteAlt,
  IntegrationInstructions,
} from '@mui/icons-material';
import BackgroundImage from '@/components/BackgroundImage';
import ContainerWrapper from '@/components/ContainerWrapper';
import {
  SectionBlurCard,
  SectionContainer,
  SectionFlexBox,
  SectionTitle,
} from '@/components/Section';
import SeifalUiLogo from '@/components/SeifalUi/Logo';
import TimeClock from '@/components/TimeClock';
import WeclomeTip from '@/components/WeclomeTip';

const iconSx = { width: '45%', minWidth: 48, color: '#fff', flex: 1 };

const HomePage = () => {
  const router = useRouter();
  // TODO 后台可配置
  const backgroundImageSrc = 'https://cdn2.agideo.com/220708/2a3ffc0e6d76.jpg';

  // 都有些什么? 列表
  const dashboardList = [
    {
      title: 'Seifal UI 库',
      icon: (
        <SeifalUiLogo
          style={{ width: '100%', minWidth: 128, flex: 1 }}
          color="#fff"
        />
      ),
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
        <TimeClock />
        <WeclomeTip />

        {/* 模块一 */}
        <SectionContainer>
          <SectionTitle>
            <Dashboard />
            <span>都有些什么?</span>
          </SectionTitle>
          <SectionFlexBox>
            {dashboardList.map((item) => (
              <SectionBlurCard
                key={item.title}
                sx={{ flex: '0 0 162px' }}
                onClick={() => !item.disabled && item.onClick?.()}
                disabled={item.disabled}
              >
                {item.icon}
                <Typography variant="subtitle1" sx={{ color: '#fff' }}>
                  {item.title}
                </Typography>
              </SectionBlurCard>
            ))}
          </SectionFlexBox>
        </SectionContainer>
      </ContainerWrapper>
    </>
  );
};

export default HomePage;
