import { Box, SxProps, Theme } from '@mui/material';
import { HtmlHTMLAttributes, ReactNode } from 'react';

export interface SectionBlurCardProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  sx?: SxProps<Theme>;
  disabled?: boolean;
}

const SectionBlurCard = (props: SectionBlurCardProps) => {
  const { children, sx, disabled, ...rest } = props;
  return (
    <Box
      sx={{
        backdropFilter: 'blur(3px)',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: 3,
        transition: 'transform 250ms',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        cursor: disabled ? 'not-allowed' : 'pointer',
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default SectionBlurCard;
