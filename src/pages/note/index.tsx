import { Container } from '@mui/material';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';

const NotePage = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        py: 0,
      }}
    >
      <Header />
      <PageTitle title="学习" primaryWord="笔记" bgTitle="Note" />
    </Container>
  );
};

export default NotePage;
