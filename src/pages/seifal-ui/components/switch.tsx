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
};

const switchType = `import { Switch } from '@seifal/ui';

function Page() {
  return (
    <div style={{ padding: 16 }}>
      <h4>Outstand</h4>
      <Switch />
      <h4>Contain</h4>
      <Switch type="contain" />
    </div>
  );
};

export default Page;
`;

const controlledSwitch = `import React from 'react';
import { Switch } from '@seifal/ui';

function Page() {
  const [checked, setChecked] = React.useState(false)
  function handleChange (checked) {
    setChecked(checked)
  }

  return (
    <div style={{ padding: 16 }}>
      <Switch checked={checked} onChange={handleChange} />
    </div>
  );
};

export default Page;
`;

const disapledSwitch = `import { Switch } from '@seifal/ui';

function Page() {
  return (
    <div style={{ padding: 16 }}>
      <h4>Outstand</h4>
      <Switch disabled />
      <Switch disabled checked />
      <h4>Contain</h4>
      <Switch type="contain" disabled />
      <Switch type="contain" checked />
    </div>
  );
};

export default Page;
`;

const defaultCheckedSwitch = `import { Switch } from '@seifal/ui';

function Page() {
  return (
    <div style={{ padding: 16, display: 'flex', flexDirection: 'column' }}>
    <h4>Outstand</h4>
    <Switch defaultChecked />
    <h4>Contain</h4>
    <Switch defaultChecked type="contain" />
    </div>
  );
};

export default Page;
`;

const SwtichPage = () => {
  return (
    <Container sx={{ my: 4 }}>
      <H1>开关 Switch</H1>
      <H2>代码演示</H2>
      <H3>开关类型</H3>
      <Sandpack
        template="react"
        files={{
          '/Page.js': {
            code: switchType,
            active: true,
          },
          '/App.js': {
            code: appCode,
            hidden: true,
          },
        }}
        customSetup={{
          dependencies: sandpackDependencies,
        }}
      />

      <H3>可控组件</H3>
      <Sandpack
        template="react"
        files={{
          '/Page.js': {
            code: controlledSwitch,
            active: true,
          },
          '/App.js': {
            code: appCode,
            hidden: true,
          },
        }}
        customSetup={{
          dependencies: sandpackDependencies,
        }}
      />

      <H3>禁用的开关</H3>
      <Sandpack
        template="react"
        files={{
          '/Page.js': {
            code: disapledSwitch,
            active: true,
          },
          '/App.js': {
            code: appCode,
            hidden: true,
          },
        }}
        customSetup={{
          dependencies: sandpackDependencies,
        }}
      />

      <H3>默认选择</H3>
      <Sandpack
        template="react"
        files={{
          '/Page.js': {
            code: defaultCheckedSwitch,
            active: true,
          },
          '/App.js': {
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

SwtichPage.getLayout = function getLayout(page: ReactElement) {
  return <SeifalUILayout>{page}</SeifalUILayout>;
};

export default SwtichPage;
