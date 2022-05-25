import { Box } from '@mui/material';
import React from 'react';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';

const Stats = () => {
  return (
    <Box>
      <Header />
      <PageTitle title="一点小" primaryWord="统计" bgTitle="Stats" />
    </Box>
  );
};

export default Stats;
