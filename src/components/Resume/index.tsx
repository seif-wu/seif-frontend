import { Container, Box, Divider, Typography } from '@mui/material';
import ModuleTitle from './ModuleTitle';

type ResumeDataType = {
  name: string;
  mobile: string;
  email: string;
  desc: string;
  other_info: string;
  work_histories: any[]; // TODO 添加类型
  project_histories: any[];
};

export interface ResumeProps {
  data: ResumeDataType;
}

const Resume = ({ data }: ResumeProps) => {
  return (
    <Container sx={{ width: 794, margin: '0 auto' }}>
      <Box component="h2" sx={{ textAlign: 'center' }}>
        {data?.name}
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mb: 2 }}>
        <Box>{data?.mobile}</Box>
        <Divider orientation="vertical" flexItem />
        <Box>{data?.email}</Box>
      </Box>
      <ModuleTitle>工作经历</ModuleTitle>
      <Box>
        {(data?.work_histories || []).map((item) => {
          return (
            <Box key={item.id}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6">{item.company_name}</Typography>
                <Typography variant="body2">{item.time_period}</Typography>
              </Box>
              <Box>
                <Typography variant="body1">{item.jobs}</Typography>
                <Box dangerouslySetInnerHTML={{ __html: item.desc }} />
              </Box>
            </Box>
          );
        })}
      </Box>

      <ModuleTitle>个人技能</ModuleTitle>
      <Box
        component="span"
        sx={{
          display: 'block',
          '@media (min-width: 992px)': {
            display: 'block',
          },
          '@media (min-width: 576px)': {
            display: 'inline',
          },
        }}
        dangerouslySetInnerHTML={{ __html: data?.desc }}
      />

      <ModuleTitle>项目经验</ModuleTitle>
      {(data?.project_histories || []).map((item, index) => {
        return (
          <Box key={item.id} sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="h6" sx={{ fontSize: 17 }}>
                {item.project_name}
              </Typography>
              <Typography variant="body1">{item.time_period}</Typography>
            </Box>
            <Box
              sx={(theme) => {
                return {
                  a: {
                    textDecoration: 'none',
                    color: theme.palette.primary.main,
                  },
                };
              }}
            >
              <Typography variant="body2" sx={{ fontSize: 15 }}>
                {item.jobs}
              </Typography>
              <Box
                sx={{ mt: 1, fontSize: 14 }}
                dangerouslySetInnerHTML={{ __html: item.desc }}
              />
            </Box>
            {index !== data.project_histories.length - 1 && (
              <Divider sx={{ mt: 2 }} variant="middle" />
            )}
          </Box>
        );
      })}

      <ModuleTitle>其他</ModuleTitle>
      <Box
       sx={(theme) => {
        return {
          a: {
            textDecoration: 'none',
            color: theme.palette.primary.main,
          },
        };
      }}
        dangerouslySetInnerHTML={{ __html: data?.other_info }}
      />
    </Container>
  );
};

export default Resume;
