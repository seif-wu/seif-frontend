import { Box, Theme } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import NoteAltRoundedIcon from '@mui/icons-material/NoteAltRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';

const headerSx = {
  position: 'fixed',
  right: '30px',
  display: 'flex',
  alignItems: 'center',
  top: '50%',
  opacity: '1',
  transition: 'opacity .3s',
  WebkitTransition: 'opacity .3s',
  transform: 'translateY(-50%)',
  zIndex: '10',
};

const liSx = (theme: Theme) => {
  return {
    width: '50px',
    height: '50px',
    listStyle: 'none',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    transition: '.3s',
    margin: '20px 0',
    borderRadius: '50%',
    // background: '#2b2a2a',
    backgroundColor: '#eee',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: theme.palette.primary.main,
      color: '#fff',
      '& .label': {
        opacity: '1',
        right: '27px',
        margin: '0',
        textAlign: 'center',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '30px 0 0 30px',
      },
    },
    '& .label': {
      zIndex: '-1',
      position: 'absolute',
      top: '0',
      right: '0',
      opacity: '0',
      color: '#fff',
      lineHeight: '50px',
      fontWeight: 500,
      transition: 'all .3s',
      borderRadius: '30px',
      whiteSpace: 'nowrap',
      // textTransform: 'uppercase',
      padding: '0 25px 0 30px',
      height: '50px',
      margin: '0',
    },
  };
};

const Header = () => {
  const router = useRouter();

  const handleMenuClick = (path: string) => {
    router.push(path);
  };

  // TODO 写成 Layout 的形式
  const navs = [
    {
      path: '/',
      label: '首页',
      icon: (
        <HomeRoundedIcon sx={{ fontSize: 24, flex: 1, textAlign: 'center' }} />
      ),
    },
    {
      path: '/stats',
      label: '统计',
      icon: (
        <AssessmentRoundedIcon
          sx={{ fontSize: 24, flex: 1, textAlign: 'center' }}
        />
      ),
    },
    {
      path: '/about',
      label: '关于我',
      icon: (
        <PersonRoundedIcon
          sx={{ fontSize: 24, flex: 1, textAlign: 'center' }}
        />
      ),
    },
    {
      path: '/note',
      label: '笔记',
      icon: (
        <NoteAltRoundedIcon
          sx={{ fontSize: 24, flex: 1, textAlign: 'center' }}
        />
      ),
    },
  ];

  return (
    <Box sx={headerSx}>
      <Box component="ul" sx={{ m: 0, p: 0 }}>
        {navs.map((nav) => (
          <Box
            component="li"
            sx={liSx}
            key={nav.path}
            onClick={() => handleMenuClick(nav.path)}
          >
            {nav.icon}
            <Box className="label">{nav.label}</Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Header;
