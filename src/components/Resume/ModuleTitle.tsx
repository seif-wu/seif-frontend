import type { ReactNode } from 'react';
import { Box } from '@mui/material';

export interface ModuleTitleProps {
  children: ReactNode;
}

const ModuleTitle = ({ children }: ModuleTitleProps) => {
  return (
    <Box
      sx={(theme) => {
        return {
          width: 160,
          py: 1,
          px: 2,
          my: 1,
          position: 'relative',
          backgroundColor: theme.palette.primary.main,
          WebkitPrintColorAdjust: 'exact',
          color: '#fff',
        };
      }}
    >
      {children}
      <Box
        sx={{
          width: 48,
          height: 48,
          top: -8,
          zIndex: 2,
          background: '#fff',
          right: -20,
          position: 'absolute',
          transform: 'rotate(-15deg)',
        }}
      ></Box>
    </Box>
  );
};

export default ModuleTitle;
