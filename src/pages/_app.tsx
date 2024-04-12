import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { GlobalStyle, Container } from '../styles/globals';
import { Header } from '../components';
import type { AppProps } from 'next/app';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <Container>
        <Header />
        <Component {...pageProps} />
        <ReactQueryDevtools initialIsOpen={false} />
      </Container>
    </QueryClientProvider>
  );
}

export default MyApp;
