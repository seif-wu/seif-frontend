import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';
import { Box } from '@mui/system';
import styles from './index.module.css';

const code = `import { Button } from '@seifal/ui';
import { darken, ThemeProvider } from '@seifal/system';

const theme = {
  // 自定义主题 默认 light 主题
  mode: 'light',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>
        <span style={{ color: darken('#000', 0.2) }}>
          Seifal UI
        </span>
        &nbsp;
        一个简单的 React 组件库
      </h1>
      <Button type="primary">
        Seifal UI Button
      </Button>
    </ThemeProvider>
  );
};

export default App;
`;

const ShowCodeBox = () => {
  return (
    <Box
      sx={{
        minHeight: '75vh',
        height: '100%',
        backgroundImage: `url('/sandpack-bg.jpg')`,
        borderBottomLeftRadius: '2rem',
        borderTopLeftRadius: '2rem',
      }}
    >
      <Box className={styles.sandpack}>
        <SandpackProvider
          theme="dark"
          template="react"
          files={{
            '/App.js': code,
          }}
          customSetup={{
            dependencies: {
              '@seifal/ui': '^0.0.1',
              '@seifal/system': '^0.0.1',
            },
          }}
        >
          <SandpackLayout>
            <SandpackCodeEditor
              wrapContent
              style={{ height: '100%' }}
              readOnly
              showReadOnly={false}
              showLineNumbers
            />
            <SandpackPreview style={{ display: 'none' }} />
          </SandpackLayout>
        </SandpackProvider>
      </Box>
    </Box>
  );
};

export default ShowCodeBox;
