import type { AppProps } from 'next/app';
import Head from 'next/head';
import { GlobalStyle } from '../styles/global-style';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import Layout from '../components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
