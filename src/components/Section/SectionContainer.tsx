import { ReactNode } from 'react';
import { Box } from '@mui/material';

export interface SectionContainerProps {
  children?: ReactNode;
}

const boxStyle = {
  mt: 8,
}

const SectionContainer = (props: SectionContainerProps) => {
  const { children } = props;
  return <Box sx={boxStyle}>{children}</Box>;
};

export default SectionContainer;
