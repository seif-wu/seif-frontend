import { Box } from '@mui/material';
import { AutoAwesomeMotion } from '@mui/icons-material';

const WeclomeTip = () => {
  return (
    <Box
      sx={{
        color: '#fff',
        display: 'flex',
        gap: 1,
      }}
    >
      <AutoAwesomeMotion />
      <span>欢迎来到不知名的小站</span>
    </Box>
  );
};

export default WeclomeTip;
