import styled from '@emotion/styled';

export interface BackgroundImageProps {
  src: string;
}

const BackgroundBox = styled.div(() => {
  return {
    width: '100%',
    height: '100%',
    left: 0,
    overflow: 'hidden',
    position: 'fixed',
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

  return (
    <BackgroundBox className="animate__animated animate__fadeIn">
      <BackgroundImageBox src={src} />
    </BackgroundBox>
  );
};

export default BackgroundImage;
