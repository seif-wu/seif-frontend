import styled from '@emotion/styled';
import { Box, SxProps, Theme } from '@mui/material';
import { CSSProperties, HtmlHTMLAttributes, ReactNode } from 'react';

export interface SectionBgCardProps
  extends Omit<HtmlHTMLAttributes<HTMLDivElement>, 'title'> {
  title?: ReactNode;
  titleStyle?: CSSProperties;
  subTitle?: ReactNode;
  icon?: ReactNode;
  background?: string;
  sx?: SxProps<Theme>;
}

const BgBox = styled.div<SectionBgCardProps>((props) => ({
  position: 'absolute',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRadius: 24,
  bottom: 0,
  filter: 'brightness(0.75) saturate(1.2) contrast(0.85)',
  left: 0,
  right: 0,
  top: 0,
  transformOrigin: 'center',
  transform: 'scale(1) translateZ(0)',
  transition: 'filter 200ms linear, transform 200ms linear',
  backgroundImage: `url(${props.background})`,
}));

const SectionBgCard = (props: SectionBgCardProps) => {
  const { children, title, subTitle, background, sx, ...rest } = props;
  return (
    <Box
      className="section-bg-card"
      sx={{
        width: '100%',
        position: 'relative',
        '&:before': {
          content: '""',
          display: 'block',
          paddingBottom: '150%',
          width: '100%',
        },
        '&:hover .card-background': {
          transform: 'scale(1.05) translateZ(0)',
        },
        cursor: 'pointer',
        ...sx,
      }}
      {...rest}
    >
      <BgBox className="card-background" background={background} />
      <Box
        className="card-content"
        sx={{
          p: 3,
          position: 'absolute',
          top: 0,
          left: 0,
        }}
      >
        <Box
          className="card-sub-title"
          sx={{
            color: 'rgba(255,255,255, 0.55)',
          }}
        >
          {subTitle}
        </Box>
        <Box
          className="card-title"
          sx={{
            color: 'rgba(255,255,255, 1)',
            fontSize: '2rem',
            textShadow: '2px 2px 20px rgb(0 0 0 / 20%)',
            lineHeight: 1.5,
            '@media (max-width: 420px)': {
              fontSize: 20
            },
          }}
        >
          {title}
        </Box>
      </Box>
    </Box>
  );
};

export default SectionBgCard;
