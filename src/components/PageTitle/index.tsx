import { Box } from '@mui/material';

interface PageTitleProps {
  title: string;
  bgTitle: string;
  primaryWord: string;
}

const PageTitle = ({ title, bgTitle, primaryWord }: PageTitleProps) => {
  return (
    <Box
      sx={{
        margin: '0 auto',
        width: '100%',
        position: 'relative',
        padding: '80px 0',
        textAlign: 'center',
      }}
    >
      <Box
        component="h1"
        sx={{
          color: '#666',
          fontSize: 56,
          fontWeight: '800',
          textTransform: 'uppercase',
          m: 0,
        }}
      >
        {title}
        <Box
          component="span"
          sx={(theme) => {
            return { color: theme.palette.primary.main, fontWeight: 'bold' };
          }}
        >
          {primaryWord}
        </Box>
      </Box>
      <Box
        sx={{
          fontSize: '110px',
          left: '0',
          letterSpacing: '10px',
          lineHeight: '.7',
          position: 'absolute',
          right: '0',
          top: '50%',
          textTransform: 'uppercase',
          fontWeight: 800,
          transform: 'translateY(-50%)',
          color: 'rgba(30,37,48,.07)',
        }}
      >
        {bgTitle}
      </Box>
    </Box>
  );
};

export default PageTitle;
