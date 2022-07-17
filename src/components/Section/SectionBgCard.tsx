import { Box } from '@mui/material';
import { CSSProperties, HtmlHTMLAttributes, ReactNode } from 'react';

export interface SectionBgCardProps extends Omit<HtmlHTMLAttributes<HTMLDivElement>, "title"> {
  title?: ReactNode;
  titleStyle?: CSSProperties;
  subTitle?: ReactNode;
  icon?: ReactNode;
  background?: string;
  children?: ReactNode;
}

const SectionBgCard = (props: SectionBgCardProps) => {
  const { children } = props;
  return <Box>{children}</Box>;
};

export default SectionBgCard;
