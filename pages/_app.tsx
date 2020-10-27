import "../styles/global.css";
import { AppProps } from 'next/app'

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default App