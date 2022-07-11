import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import DashboardIcon from '@mui/icons-material/Dashboard';
import BackgroundImage from '@/components/BackgroundImage';
import ContainerWrapper from '@/components/ContainerWrapper';
import SectionBlurCard from '@/components/Section/SectionBlurCard';
import SectionContainer from '@/components/Section/SectionContainer';
import SectionTitle from '@/components/Section/SectionTitle';
import SeifalUiLogo from '@/components/SeifalUi/Logo';
import TimeClock from '@/components/TimeClock';

// TODO 后台可配置
const backgroundImageSrc = 'https://cdn2.agideo.com/220708/2a3ffc0e6d76.jpg';

const WeclomeTip = () => {
  return (
    <Box
      sx={{
        color: '#fff',
        display: 'flex',
        gap: 1,
      }}
    >
      <AutoAwesomeIcon />
      <span>欢迎来到不知名的小站</span>
    </Box>
  );
};

const HomePage = () => {
  const router = useRouter();

  return (
    <>
      <BackgroundImage src={backgroundImageSrc} />
      <ContainerWrapper className="animate__animated animate__slideInUp">
        <TimeClock />
        <WeclomeTip />

        {/* 模块一 */}
        <SectionContainer>
          <SectionTitle>
            <DashboardIcon />
            <span>这都有些什么呢?</span>
          </SectionTitle>
          <Box
            sx={{
              mt: 3,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 2,
            }}
          >
            <SectionBlurCard
              sx={{ flex: '0 0 162px', cursor: 'pointer' }}
              onClick={() => router.push('/seifal-ui')}
            >
              <SeifalUiLogo
                style={{ width: '100%', minWidth: 128, flex: 1 }}
                color="#fff"
              />
              <Typography variant="subtitle1" sx={{ color: '#fff' }}>
                Seifal UI 库
              </Typography>
            </SectionBlurCard>

            <SectionBlurCard
              sx={{ flex: '0 0 162px', cursor: 'not-allowed' }}
            >
              <IntegrationInstructionsIcon
                sx={{ width: '45%', minWidth: 48, color: '#fff', flex: 1 }}
              />
              <Typography variant="subtitle1" sx={{ color: '#fff' }}>
                代码片段
              </Typography>
            </SectionBlurCard>

            <SectionBlurCard
              sx={{ flex: '0 0 162px', cursor: 'not-allowed', minHeight: 156 }}
            >
              <NoteAltIcon
                sx={{ width: '45%', minWidth: 48, color: '#fff', flex: 1 }}
              />
              <Typography variant="subtitle1" sx={{ color: '#fff' }}>
                学习笔记
              </Typography>
            </SectionBlurCard>
          </Box>
        </SectionContainer>
      </ContainerWrapper>
    </>
  );
};

export default HomePage;
