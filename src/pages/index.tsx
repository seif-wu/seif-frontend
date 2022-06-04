import useSWR from 'swr';
import type { NextPage } from 'next';
import { Button, Box, Container, Grid, Typography } from '@mui/material';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import api from '../lib/core/api';
import MySelfGithubCard from '../components/Index/MySelfGithubCard';
import BlockI from '../components/BgBlock/BlockI';
import Header from '../components/Header';
import Loading from '../components/Loading';

const Home: NextPage = () => {
  const { data: githubUserRes } = useSWR('/api/github/user', api.get);

  if (!githubUserRes) {
    return (
      <Box
        sx={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Loading.SpinI />
      </Box>
    );
  }

  return (
    <>
      <Container maxWidth="xl" sx={{ py: 0 }}>
        <BlockI />
        <Header />
        <Grid container spacing={3} sx={{ pt: 3, height: '100vh' }}>
          <Grid item xs={6} md={4} sx={{ height: '100%' }}>
            <MySelfGithubCard data={githubUserRes} />
          </Grid>
          <Grid
            item
            xs={6}
            md={8}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box sx={{ maxWidth: 550 }}>
              <Typography variant="h4" sx={{ mb: 2 }}>
                欢迎来到简陋的网站
              </Typography>
              <Typography variant="subtitle2">
                我是一个前端开发人员，本站不断完善中，是边学习边实现功能的状态，如果你经常关注本站，你将发现它的变化。本站用来记录个人简历、学习笔记、代码片段。
              </Typography>
              <Typography variant="subtitle2">
                本站基于 Next.js + Material-ui + Flask 实现
              </Typography>
              <Button
                variant="contained"
                endIcon={<KeyboardDoubleArrowDownIcon />}
                size="large"
                sx={{ mt: 3 }}
              >
                关于我
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Home;
