import { animated, useSpring } from 'react-spring';
import styled from '@emotion/styled';

export interface BackgroundImageProps {
  src: string;
}

const BackgroundBox = styled.div(() => {
  return {
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    position: 'fixed',
    left: 0,
    top: 0,
    zIndex: -1,
  };
});

const BackgroundImageBox = styled.div<BackgroundImageProps>((props) => {
  return {
    width: '100%',
    height: '100%',
    backgroundImage: `url('${props.src}')`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    transition: 'transform 250ms',
  };
});

const BackgroundImage = (props: BackgroundImageProps) => {
  const { src } = props;
  const springStyles = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });

  return (
    <animated.div style={springStyles}>
      <BackgroundBox>
        <BackgroundImageBox src={src} />
      </BackgroundBox>
    </animated.div>
  );
};

export default BackgroundImage;
