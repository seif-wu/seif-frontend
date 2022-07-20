import { Box, SxProps, Theme } from '@mui/material';
import { HtmlHTMLAttributes, ReactNode } from 'react';

export interface SectionFlexItemBoxProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  sx?: SxProps<Theme>;
  span?: number;
}

const SectionFlexItemBox = (props: SectionFlexItemBoxProps) => {
  const { children, sx, span, ...rest } = props;

  let width = '100%';
  if (span === 4) {
    width = '24%';
  }

  return (
    <Box
      className="section-flex-item"
      sx={{
        flex: span ? `0 0 calc(${width} - 8px)` : '0 0 162px',
        ...sx,
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
