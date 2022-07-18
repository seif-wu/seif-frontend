import { Box, SxProps, Theme } from '@mui/material';
import { HtmlHTMLAttributes, ReactNode } from 'react';

export interface SectionFlexBoxProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  sx?: SxProps<Theme>;
  disabled?: boolean;
}

const SectionFlexBox = (props: SectionFlexBoxProps) => {
  const { children, sx, disabled, ...rest } = props;

  return (
    <Box
      sx={{
        mt: 3,
        // ml: -1,
        // mr: -1,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default SectionFlexBox;
