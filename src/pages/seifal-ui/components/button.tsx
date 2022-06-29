import React, { ReactElement } from 'react';
import { Container, Typography } from '@mui/material';
import { Sandpack } from '@codesandbox/sandpack-react';
import SeifalUILayout from '@/components/Layouts/SeifalUILayout';
import H1 from '@/components/H1';
import H2 from '@/components/H2';
import H3 from '@/components/H3';

const gettingStartedCode = `import { darken, ThemeProvider } from '@seifal/system';
import ButtonPage from './ButtonPage';

const theme = {
  // 自定义主题 默认 light 主题
  mode: 'light',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ButtonPage />
    </ThemeProvider>
  );
};

export default App;
`

const boxCode = `
function Box(props) {
  const { children } = props;

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'flex-start',
        gap: 8,
      }}
    >
      {children}
    </div>
  )
}

export default Box;
`

const buttonPageCode = `import { Button } from '@seifal/ui';
import Box from './Box';

function ButtonPage() {
  return (
    <Box>
      <Button>
        Default
      </Button>

      <Button type="primary">
        Primary
      </Button>

      <Button type="warning">
        Warning
      </Button>

      <Button type="danger">
        Danger
      </Button>
    </Box>
  );
};

export default ButtonPage;
`

const buttonSizeCode = `import { Button } from '@seifal/ui';
import Box from './Box';

function ButtonPage() {
  return (
    <Box>
      <Button type="primary" size="sm">
        Small
      </Button>

      <Button type="primary" size="md">
        Default
      </Button>

      <Button type="primary" size="lg">
        Large
      </Button>
    </Box>
  );
};

export default ButtonPage;
`

const buttonDisabledCode = `import { Button } from '@seifal/ui';
import Box from './Box';

function ButtonPage() {
  return (
    <Box>
      <Button type="primary" disabled>
        Disabled
      </Button>
    </Box>
  );
};

export default ButtonPage;
`

const GettingStarted = () => {
  return (
    <Container sx={{ my: 4, }}>
      <H1>按钮 Button</H1>
      <H2>代码演示</H2>
      <H3>按钮类型</H3>
      <Sandpack
        template="react"
        files={{
          "/ButtonPage.js": {
            code: buttonPageCode,
            active: true,
          },
          "/App.js": {
            code: gettingStartedCode,
            hidden: true,
          },
          "/Box.js": {
            code: boxCode,
            hidden: true,
          }
        }}
        customSetup={{
          dependencies: {
            '@seifal/ui': '^0.0.1-alpha.2',
          },
        }}
      />
      <H3>按钮尺寸</H3>
      <Typography variant="body2" gutterBottom component="div">
        按钮有大中小三种尺寸，分别为 sm、md、lg 三种尺寸，默认为 md
      </Typography>
      <Sandpack
        template="react"
        files={{
          "/ButtonPage.js": {
            code: buttonSizeCode,
            active: true,
          },
          "/App.js": {
            code: gettingStartedCode,
            hidden: true,
          },
          "/Box.js": {
            code: boxCode,
            hidden: true,
          }
        }}
        customSetup={{
          dependencies: {
            '@seifal/ui': '^0.0.1-alpha.2',
          },
        }}
      />
      <H3>禁用状态</H3>
      <Sandpack
        template="react"
        files={{
          "/ButtonPage.js": {
            code: buttonDisabledCode,
            active: true,
          },
          "/App.js": {
            code: gettingStartedCode,
            hidden: true,
          },
          "/Box.js": {
            code: boxCode,
            hidden: true,
          }
        }}
        customSetup={{
          dependencies: {
            '@seifal/ui': '^0.0.1-alpha.2',
          },
        }}
      />
    </Container>
  );
};

GettingStarted.getLayout = function getLayout(page: ReactElement) {
  return <SeifalUILayout>{page}</SeifalUILayout>;
};

export default GettingStarted;
