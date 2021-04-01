import { ElementType, memo } from 'react';
import { PageConfig } from 'next';

import '../styles/global.css';

type AppProps = {
  Component: ElementType;
  pageProps: PageConfig;
};

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default memo(App);
