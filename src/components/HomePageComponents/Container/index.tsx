import { ReactNode } from 'react';
import { styled } from '@mui/material/styles';

interface ContainerElementProps {
  children?: ReactNode;
}

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  color: '#fff',
  background: 'rgb(18, 18, 18)',
  minHeight: '100vh',
  height: '100%',
}));

const ContainerElement = (props: ContainerElementProps) => {
  const { children } = props;

  return <Container>{children}</Container>;
};

export default ContainerElement;
