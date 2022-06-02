import { useState, useEffect, ChangeEvent } from 'react';
import {
  Alert,
  Box,
  Button,
  Container,
  Input,
  Grid,
  Typography,
} from '@mui/material';
import api from '../../lib/core/api';
import useApiSWR from '../../lib/core/hooks/useApiSWR';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';

const Li = ({
  title,
  value,
  width = '50%',
}: {
  title: string;
  value: string;
  width?: string;
}) => {
  return (
    <Box
      component="li"
      sx={{
        flex: `0 0 ${width}`,
        maxWidth: `${width}`,
        ':not(:last-child)': {
          bp: 3,
        },
      }}
    >
      <Box
        component="span"
        sx={{
          opacity: '.8',
          textTransform: 'capitalize',
        }}
      >
        {title}：
      </Box>
      <Box
        component="span"
        sx={{
          fontWeight: 600,
          display: 'block',
          '@media (min-width: 992px)': {
            display: 'block',
          },
          '@media (min-width: 576px)': {
            display: 'inline',
          },
        }}
        dangerouslySetInnerHTML={{ __html: value }}
      ></Box>
    </Box>
  );
};

const StateCard = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <Box
      sx={{
        border: '1px solid #ddd',
        mb: 1,
        padding: '20px 30px 25px 40px',
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        maxWidth: 500,
      }}
    >
      <Box
        component="h3"
        sx={(theme) => {
          return {
            maxWidth: 500,
            position: 'relative',
            color: theme.palette.primary.main,
            fontWeight: 700,
            fontSize: 48,
            display: 'inline-block',
            margin: 0,
            ':after': {
              content: '"+"',
              position: 'absolute',
              right: '-24px',
              fontSize: '33px',
              fontWeight: '300',
              top: '2px',
            },
          };
        }}
      >
        {value}
      </Box>
      <Box
        sx={{
          position: 'relative',
          pl: 5,
          color: '#666',
          ':before': {
            content: '""',
            position: 'absolute',
            left: '0',
            top: '13px',
            width: '30px',
            height: '1px',
            background: '#777',
          },
        }}
      >
        {title}
      </Box>
    </Box>
  );
};

const About = () => {
  const [isQuery, setIsQuery] = useState(false);
  const [mobile, setMobile] = useState('');
  const [xToken, setXToken] = useState('');

  useEffect(() => {
    setXToken(localStorage.getItem('XToken') as string);
  }, []);

  const { data, error, mutate } = useApiSWR(
    xToken
      ? [
          '/api/v1/desktop/personal_information',
          {
            headers: {
              'X-Token': xToken,
            },
          },
        ]
      : null,
    {
      shouldRetryOnError: false,
    }
  );

  const handleMobile = async () => {
    setIsQuery(true);
    mutate(
      () => {
        return api.get('/api/v1/desktop/personal_information', {
          headers: {
            'X-Token': xToken,
          },
          params: {
            mobile,
          },
        });
      },
      {
        revalidate: false,
      }
    );
  };

  const handleMyMobile = (e: ChangeEvent<HTMLInputElement>) => {
    setMobile(e.target.value);
  };

  if (error?.code) {
    return (
      <Container
        maxWidth="xl"
        sx={{
          py: 0,
          gap: 6,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src="/password.svg" style={{ width: 200 }} />
        <Box
          sx={{
            display: 'flex',
            gap: 1,
          }}
        >
          <Input
            value={mobile}
            onChange={handleMyMobile}
            placeholder="请输入我的联系方式"
          />
          <Button onClick={handleMobile} variant="contained" size="small">
            确认
          </Button>
        </Box>

        {!!error.code && isQuery && (
          <Alert severity="error">{error.message}</Alert>
        )}
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 0 }}>
      <Header />
      <PageTitle title="关于" primaryWord="我" bgTitle="About" />
      <Grid container spacing={2} sx={{ px: 10 }}>
        <Grid item xs={12} md={6}>
          <Typography
            variant="h5"
            gutterBottom
            component="div"
            sx={{
              color: '#666',
              pb: 2,
              fontSize: 26,
              fontWeight: 600,
            }}
          >
            个人信息
          </Typography>
          <Box
            component="ul"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              paddingLeft: '0',
              listStyle: 'none',
              marginTop: '0',
              marginBottom: '1rem',
            }}
          >
            <Li title="姓名" value={data?.name} />
            <Li title="年龄" value={data?.age} />
            <Li title="电话" value={data?.mobile} />
            <Li title="邮箱" value={data?.email} />
            <Li title="其他" width="100%" value={data?.desc} />
          </Box>
        </Grid>
        <Grid container item xs={12} md={6}>
          <Grid item xs={12} md={12}>
            <StateCard title="工作经验" value={data?.work_experience} />
          </Grid>
          <Grid item xs={12} md={12}>
            <StateCard title="项目经验" value={data?.num_projects} />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
