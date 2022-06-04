import Box from '@mui/material/Box';

const SpinI = () => {
  return (
    <Box
      component="svg"
      width={65}
      height={65}
      viewBox="0 0 66 66"
      sx={{
        animation: 'rotator 1.4s linear infinite',
        '.path': {
          strokeDasharray: 187,
          strokeDashoffset: 0,
          transformOrigin: 'center',
          animation:
            'dash 1.4s ease-in-out infinite, colors 5.6s ease-in-out infinite',
        },

        '@keyframes rotator': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(270deg)' },
        },

        '@keyframes colors': {
          '0%': { stroke: '#4285F4' },
          '25%': { stroke: '#DE3E35' },
          '50%': { stroke: '#F7C223' },
          '75%': { stroke: '#1B9A59' },
          '100%': { stroke: '#4285F4' },
        },

        '@keyframes dash': {
          '0%': { strokeDashoffset: 187 },
          '50%': {
            strokeDashoffset: 46.75,
            transform: 'rotate(135deg)',
          },
          '100%': {
            strokeDashoffset: 187,
            transform: 'rotate(450deg)',
          },
        },
      }}
    >
      <circle
        className="path"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      />
    </Box>
  );
};

export default SpinI;
