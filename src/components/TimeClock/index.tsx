import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { useState, useEffect, useRef } from 'react';

const TimeClockBase = styled.div(() => ({
  color: 'whitesmoke',
  fontSize: '6em',
  lineHeight: 1.125,
  textShadow: '2px 2px 2px rgba(0, 0, 0, 0.1)',
}));

export default function TimeClock() {
  const [now, setNow] = useState(dayjs());
  const timer = useRef<NodeJS.Timer>();

  useEffect(() => {
    timer.current = setInterval(() => {
      setNow(dayjs());
    }, 1000);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return <TimeClockBase>{now.format('HH:mm')}</TimeClockBase>;
}
