import { Box, SxProps, Theme } from '@mui/material';
import { HtmlHTMLAttributes, ReactNode } from 'react';

export interface SectionFlexItemBoxProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  sx?: SxProps<Theme>;
}

const SectionFlexItemBox = (props: SectionFlexItemBoxProps) => {
  const { children, sx, ...rest } = props;
  return (
    <Box
      sx={{
        flex: '0 0 162px',
        '@media (max-width: 420px)': {
          flex: '0 0 calc(50% - 8px)',
        },
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default SectionFlexItemBox;
