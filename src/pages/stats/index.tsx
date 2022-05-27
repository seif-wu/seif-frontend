import { Box, Container, Grid } from '@mui/material';

import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import GithubTopLanguages from '../../components/StatsCard/GithubTopLanguages';
import LeetCodeQuestionProgress from '../../components/StatsCard/LeetCodeQuestionProgress';

const Stats = () => {
  return (
    <Container maxWidth="xl" sx={{ py: 0 }}>
      <Header />
      <PageTitle title="一点小" primaryWord="统计" bgTitle="Stats" />
      <Grid container spacing={2} sx={{ px: 10 }}>
        <Grid item md={6} xs={12}>
          <GithubTopLanguages fetchUrl="/api/github/languages" top={5} />
        </Grid>
        <Grid item md={6} xs={12}>
          <LeetCodeQuestionProgress fetchUrl="/api/leetcode/question_progress" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Stats;
