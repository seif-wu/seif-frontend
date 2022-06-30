import { ReactNode } from 'react';
import {
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListSubheader,
} from '@mui/material';
import { useRouter } from 'next/router';

interface SeifalUILayoutProps {
  children?: ReactNode;
}

const SeifalUILayout = (props: SeifalUILayoutProps) => {
  const { children } = props;
  const router = useRouter();

  return (
    <Grid container sx={{ mt: 0, minHeight: '100vh', height: '100%' }}>
      <Grid
        item
        xs={12}
        md={2}
        sx={{
          borderRight: '1px solid rgba(0,0,0,.06)',
        }}
      >
        <List component="nav" subheader={<li />}>
          <ListSubheader>开始使用</ListSubheader>
          <ListItemButton
            onClick={() => router.push('/seifal-ui/getting-started')}
          >
            <ListItem>
              <ListItemText primary="快速上手" />
            </ListItem>
          </ListItemButton>

          <ListSubheader>组件列表</ListSubheader>
          <ListItemButton
            onClick={() => router.push('/seifal-ui/components/button')}
          >
            <ListItem>
              <ListItemText primary="按钮 Button" />
            </ListItem>
          </ListItemButton>
          <ListItemButton
            onClick={() => router.push('/seifal-ui/components/divider')}
          >
            <ListItem>
              <ListItemText primary="分割线 Divider" />
            </ListItem>
          </ListItemButton>
        </List>
      </Grid>
      <Grid item md={10}>
        {children}
      </Grid>
    </Grid>
  );
};

export default SeifalUILayout;
