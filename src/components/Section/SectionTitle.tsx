import { ReactNode } from 'react';
import { Box } from '@mui/material';

const SectionTitle = ({ children }: { children: ReactNode }) => {
  return (
    <Box
      sx={{
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1.25rem',
        gap: 1,
      }}
    >
      {children}
    </Box>
  );
};

export default SectionTitle;
