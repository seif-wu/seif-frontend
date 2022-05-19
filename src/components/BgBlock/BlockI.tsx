import { Box, useTheme } from '@mui/material';

const BlockI = () => {
  return (
    <Box
      sx={(props) => {
        return {
          zIndex: -1,
          background: props.palette.primary.main,
          position: 'fixed',
          height: '200%',
          width: '100%',
          transform: 'rotate(-15deg)',
          left: '-83%',
          top: '-50%',
        }
      }}
    />
  );
};

export default BlockI;
