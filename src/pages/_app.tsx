import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GlobalStyle } from '../styles/globals';
import type { AppProps } from 'next/app';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ThemeProvider theme={{}}>
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
