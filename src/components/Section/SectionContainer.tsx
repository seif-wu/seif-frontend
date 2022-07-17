import { ReactNode } from 'react';
import { Box } from '@mui/material';
import SectionTitle from './SectionTitle';

export interface SectionContainerProps {
  icon?: ReactNode;
  title: string;
  children?: ReactNode;
}

const boxStyle = {
  mt: 8,
};

const SectionContainer = (props: SectionContainerProps) => {
  const { children, title, icon } = props;
  return (
    <Box sx={boxStyle}>
      <SectionTitle>
        {icon}
        <span>{title}</span>
      </SectionTitle>
      {children}
    </Box>
  );
};

export default SectionContainer;
