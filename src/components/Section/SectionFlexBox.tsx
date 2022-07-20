import { Box, SxProps, Theme } from '@mui/material';
import { HtmlHTMLAttributes, ReactNode } from 'react';

export interface SectionFlexBoxProps
  extends HtmlHTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  sx?: SxProps<Theme>;
  disabled?: boolean;
  hoverAnimation?: 'other-blur',
  itemClassNames?: string;
}

const SectionFlexBox = (props: SectionFlexBoxProps) => {
  const { children, sx, hoverAnimation, itemClassNames, disabled, ...rest } = props;

  return (
    <Box
      sx={{
        mt: 3,
        // ml: -1,
        // mr: -1,
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        ...(hoverAnimation === 'other-blur' && {
          [`&:hover .section-bg-card:not(:hover)  ${itemClassNames}`]: {
            filter: 'brightness(0.5) saturate(0) contrast(1.2) blur(20px)'
          },
        }),
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default SectionFlexBox;
