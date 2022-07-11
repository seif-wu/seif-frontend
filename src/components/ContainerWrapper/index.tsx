import styled from '@emotion/styled';
import { ReactNode } from 'react';

export interface ContainerWrapperProps {
  className?: string;
  children?: ReactNode;
}

const ContainerWrapperBase = styled.div(() => ({
  background: 'linear-gradient(to bottom, transparent, #1e1e1e)',
  marginTop: '30vh',
  minHeight: '80vh',
  padding: '80px',
  paddingTop: '0px',
  "@media (max-width: 420px)": {
    padding: '32px',
  }
}));

const ContainerWrapper = (props: ContainerWrapperProps) => {
  const { children, className } = props;
  return <ContainerWrapperBase className={className}>{children}</ContainerWrapperBase>;
};

export default ContainerWrapper;
