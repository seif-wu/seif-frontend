import type { ReactElement, ReactNode } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import type { NextPage } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { SWRConfig } from 'swr';
import { ThemeProvider as SeifalThemeProvider } from '@seifal/system';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../theme';
import createEmotionCache from '../createEmotionCache';
import './styles.css';

const seifalTheme = {};

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
interface MyAppProps extends AppPropsWithLayout {
  emotionCache?: EmotionCache;
}

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const ISSERVER = typeof window === 'undefined';
  if (!ISSERVER) {
    const XToken = window.localStorage.getItem('XToken');
    if (!XToken) {
      window.localStorage.setItem('XToken', uuidv4());
    }
  }
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
        />
      </Head>
      <SeifalThemeProvider theme={seifalTheme}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <SWRConfig
            value={{
              refreshInterval: 30000,
            }}
          >
            {getLayout(<Component {...pageProps} />)}
          </SWRConfig>
        </ThemeProvider>
      </SeifalThemeProvider>
    </CacheProvider>
  );
}
