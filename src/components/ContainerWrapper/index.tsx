import { ReactNode } from 'react';
import { animated, useSpring, easings } from 'react-spring';
import styled from '@emotion/styled';

export interface ContainerWrapperProps {
  className?: string;
  children?: ReactNode;
}

const ContainerWrapperBase = styled.div(() => ({
  background: 'linear-gradient(to bottom, transparent, #1e1e1e)',
  marginTop: '20vh',
  minHeight: '80vh',
  padding: '80px',
  paddingTop: '0px',
  overflow: 'hidden',
  '@media (max-width: 420px)': {
    marginTop: '10vh',
    padding: 32,
    minHeight: '90vh',
  },
}));

const ContainerWrapper = (props: ContainerWrapperProps) => {
  const { children, className } = props;
  const springStyles = useSpring({
    from: {
      opacity: 0,
      transform: 'translate(0, 100%)',
    },
    to: {
      opacity: 1,
      transform: 'translate(0, 0)',
    },
    delay: 800,
    config: {
      easing: easings.easeInOutCubic,
    },
  });

  return (
    <ContainerWrapperBase className={className}>
      <animated.div style={springStyles}>{children}</animated.div>
    </ContainerWrapperBase>
  );
};

export default ContainerWrapper;
