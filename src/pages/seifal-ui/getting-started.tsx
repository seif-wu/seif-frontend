import { Alert, Box, Container, Snackbar, Typography } from '@mui/material';
import { ReactElement, useState } from 'react';
import { Sandpack } from '@codesandbox/sandpack-react';
import CopyToClipboard from 'react-copy-to-clipboard';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import SeifalUILayout from '@/components/Layouts/SeifalUILayout';
import H1 from '@/components/H1';
import H2 from '@/components/H2';
import H3 from '@/components/H3';
import Code from '@/components/Code';

const gettingStartedCode = `import { Button } from '@seifal/ui';
import { darken, ThemeProvider } from '@seifal/system';

const theme = {
  // 自定义主题 默认 light 主题
  mode: 'light',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Button type="primary">
        Seifal UI Button
      </Button>
    </ThemeProvider>
  );
};

export default App;
`

const GettingStarted = () => {
  const [showSnackBar, setShowSnackBar] = useState(false);

  function handleCloseSnackBar() {
    setShowSnackBar(false);
  }

  return (
    <Container sx={{ mt: 4 }}>
      <H1>快速上手</H1>
      <H2>快速安装</H2>
      <H3>Yarn</H3>
      <Box component="pre" sx={{ display: 'flex', alignItems: 'center' }}>
        <Code>yarn add @seifal/ui @seifal/system</Code>
        <CopyToClipboard
          onCopy={() => setShowSnackBar(true)}
          text="yarn add @seifal/ui @seifal/system"
        >
          <FileCopyIcon sx={{ ml: 1, fontSize: 22, cursor: 'pointer' }} />
        </CopyToClipboard>
      </Box>

      <H3>Npm</H3>
      <Box component="pre" sx={{ display: 'flex', alignItems: 'center' }}>
        <Code>npm install @seifal/ui @seifal/system</Code>
        <CopyToClipboard
          onCopy={() => setShowSnackBar(true)}
          text="npm install @seifal/ui @seifal/system"
        >
          <FileCopyIcon sx={{ ml: 1, fontSize: 22, cursor: 'pointer' }} />
        </CopyToClipboard>
      </Box>

      <H2>如何使用</H2>
      <Typography variant="subtitle1" gutterBottom component="div">
        需要在根部、或 App.tsx 内使用包裹 ThemeProvider 使用
      </Typography>
      <Sandpack
        template="react"
        files={{
          "/App.js": {
            code: gettingStartedCode,
          },
        }}
        customSetup={{
          dependencies: {
            '@seifal/ui': '^0.0.1-alpha.2',
          },
        }}
      />

      <Snackbar
        open={showSnackBar}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
      >
        <Alert
          onClose={handleCloseSnackBar}
          severity="success"
          sx={{ width: '100%' }}
        >
          复制成功！赶紧去安装吧～ 🎉 🎉
        </Alert>
      </Snackbar>
    </Container>
  );
};

GettingStarted.getLayout = function getLayout(page: ReactElement) {
  return <SeifalUILayout>{page}</SeifalUILayout>;
};

export default GettingStarted;
