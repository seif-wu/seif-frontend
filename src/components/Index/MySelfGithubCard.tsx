import { Avatar, Paper, Typography } from '@mui/material';

const paperSx = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  p: 2,
  borderRadius: 2,
  height: '100%',
  boxShadow:
    '1px 0px 2px -2px rgba(0, 0, 0, 0.16), 3px 0px 6px 0px rgba(0, 0, 0, 0.12), 5px 0px 12px 4px rgba(0, 0, 0, 0.09)',
};

const MySelfGithubCard = ({ data }: any) => {
  const {
    response: { data: user },
  } = data;

  return (
    <Paper elevation={0} sx={paperSx}>
      <Avatar
        alt={user.name}
        src={user.avatar_url}
        sx={{ width: 152, height: 152 }}
      />
      <Typography
        variant="h5"
        gutterBottom
        component="div"
        sx={{ pt: 1, mb: 0 }}
      >
        {user.name}
      </Typography>
      <Typography variant="body2" gutterBottom component="div">
        {user.login}
      </Typography>
    </Paper>
  );
};

export default MySelfGithubCard;
