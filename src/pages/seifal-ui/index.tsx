import { useState } from 'react';
import { Alert, Box, Button, Grid, Snackbar, styled } from '@mui/material';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import CelebrationIcon from '@mui/icons-material/Celebration';
import Container from '@/components/HomePageComponents/Container';
import ShowCodeBox from '@/components/HomePageComponents/ShowCodeBox';

const Title = styled('h2')(({ theme }) => ({
  fontSize: 32,
  lineHeight: 1.5,
  '@media (min-width: 1280px)': {
    fontSize: 72,
  },
  '@media (min-width: 640px)': {
    fontSize: 45,
  },
}));

const Home: NextPage = () => {
  const [showSnackBar, setShowSnackBar] = useState(false);
  const router = useRouter();

  function handleCloseSnackBar() {
    setShowSnackBar(false);
  }

  return (
    <Container>
      <Grid container spacing={2} sx={{ mt: 0 }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              '@media (min-width: 1024px)': {
                maxWidth: '42rem',
                margin: '0 auto',
              },
            }}
          >
            <Title>
              Seifal <span style={{ color: '#1677ff' }}> UI </span>
              <br />
              一个<span style={{ color: '#00b578' }}>简单</span>的 React 组件库
            </Title>

            <h2>快速安装</h2>
            <h3>Yarn</h3>
            <Box component="pre">
              <Box
                component="code"
                sx={{
                  margin: '0 .2em',
                  padding: '.2em .4em 0.2em',
                  fontSize: 22,
                  background: 'rgba(150,150,150,.1)',
                  border: '1px solid rgba(100,100,100,.2)',
                  borderRadius: '3px',
                }}
              >
                yarn add @seifal/ui @seifal/system
              </Box>
              <CopyToClipboard
                onCopy={() => setShowSnackBar(true)}
                text="yarn add @seifal/ui @seifal/system"
              >
                <FileCopyIcon sx={{ fontSize: 22, cursor: 'pointer' }} />
              </CopyToClipboard>
            </Box>

            <h3>Npm</h3>
            <Box component="pre">
              <Box
                component="code"
                sx={{
                  margin: '0 .2em',
                  padding: '.2em .4em 0.2em',
                  fontSize: 22,
                  background: 'rgba(150,150,150,.1)',
                  border: '1px solid rgba(100,100,100,.2)',
                  borderRadius: '3px',
                }}
              >
                npm install @seifal/ui @seifal/system
              </Box>
              <CopyToClipboard
                onCopy={() => setShowSnackBar(true)}
                text="npm install @seifal/ui @seifal/system"
              >
                <FileCopyIcon sx={{ fontSize: 22, cursor: 'pointer' }} />
              </CopyToClipboard>
            </Box>

            <Box sx={{ mt: 4 }}>
              <Button
                startIcon={<GitHubIcon />}
                variant="outlined"
                size="large"
                sx={{ mr: 2 }}
                onClick={() =>
                  window.open('https://github.com/seif-wu/seifal-ui')
                }
              >
                源代码
              </Button>
              <Button
                startIcon={<CelebrationIcon />}
                variant="contained"
                size="large"
                onClick={() => router.push('/seifal-ui/getting-started')}
              >
                开始使用
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <ShowCodeBox />
        </Grid>
      </Grid>

      <Snackbar
        open={showSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity="success"
          sx={{ width: '100%' }}
        >
          复制成功！赶紧去安装吧～ 🎉 🎉
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Home;
