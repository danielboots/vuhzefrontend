import "../styles/globals.css";
import { auth } from "./../firebase/utils";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
