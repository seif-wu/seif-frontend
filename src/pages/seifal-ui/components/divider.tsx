import React, { ReactElement } from 'react';
import { Container, Typography } from '@mui/material';
import { Sandpack } from '@codesandbox/sandpack-react';
import SeifalUILayout from '@/components/Layouts/SeifalUILayout';
import H1 from '@/components/H1';
import H2 from '@/components/H2';
import H3 from '@/components/H3';
import appCode from '@/components/SeifalUi/Sandpack/appCode';

const sandpackDependencies = {
  '@seifal/ui': '^0.0.1-alpha.3',
}

const horizontalDivider = `import { Divider } from '@seifal/ui';

function Page() {
  return (
    <div style={{ padding: 16 }}>
      <span>这是一段文字，下面会有个分割线</span>
      <Divider />
      <span>这是一段文字，上面那个是分割线</span>
      <Divider />
      <span>这是一段文字，上面那个是分割线</span>
    </div>
  );
};

export default Page;
`

const horizontalWithTextDivider = `import { Divider } from '@seifal/ui';

function Page() {
  return (
    <div style={{ padding: 16 }}>
      <span>这是一段文字，下面那个是带文字的分割线</span>
      <Divider>Center</Divider>
      <span>这是一段文字，上面那个是带文字的分割线</span>
      <Divider textAlign="left">Left</Divider>
      <span>这是一段文字，上面那个是带文字的分割线</span>
      <Divider textAlign="right">Right</Divider>
      <span>这是一段文字，上面那个是带文字的分割线</span>
    </div>
  );
};

export default Page;
`

const verticalDivider =  `import { Divider } from '@seifal/ui';

function Page() {
  return (
    <div style={{ padding: 16, display: 'flex', alignItems: 'center' }}>
      <span>
        垂直的分割线
        <br />
        垂直的分割线
      </span>
      <Divider type="vertical">Or</Divider>
      <span>垂直的分割线</span>
      <Divider type="vertical" />
      <span>垂直的分割线</span>
    </div>
  );
};

export default Page;
`

const DividerPage = () => {
  return (
    <Container sx={{ my: 4, }}>
      <H1>分割线 Divider</H1>
      <H2>代码演示</H2>
      <H3>水平分割线</H3>
      <Sandpack
        template="react"
        files={{
          "/Page.js": {
            code: horizontalDivider,
            active: true,
          },
          "/App.js": {
            code: appCode,
            hidden: true,
          },
        }}
        customSetup={{
          dependencies: sandpackDependencies,
        }}
      />

      <H3>带文字的分割线</H3>
      <Sandpack
        template="react"
        files={{
          "/Page.js": {
            code: horizontalWithTextDivider,
            active: true,
          },
          "/App.js": {
            code: appCode,
            hidden: true,
          },
        }}
        customSetup={{
          dependencies: sandpackDependencies,
        }}
      />


      <H3>垂直分割线</H3>
      <Typography variant="body2" gutterBottom component="div">
        垂直分割线需要配合 Flex 使用
      </Typography>
      <Sandpack
        template="react"
        files={{
          "/Page.js": {
            code: verticalDivider,
            active: true,
          },
          "/App.js": {
            code: appCode,
            hidden: true,
          },
        }}
        customSetup={{
          dependencies: sandpackDependencies,
        }}
      />
    </Container>
  );
};

DividerPage.getLayout = function getLayout(page: ReactElement) {
  return <SeifalUILayout>{page}</SeifalUILayout>;
};

export default DividerPage;
