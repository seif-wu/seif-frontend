import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { v4 as uuidv4 } from 'uuid';
import { SWRConfig } from 'swr';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import theme from '../theme';
import createEmotionCache from '../createEmotionCache';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const ISSERVER = typeof window === "undefined";
  if (!ISSERVER) {
    const XToken = window.localStorage.getItem('XToken');
    if (!XToken) {
      window.localStorage.setItem('XToken', uuidv4());
    }
  }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <SWRConfig
          value={{
            refreshInterval: 30000,
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}
