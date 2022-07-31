import "../styles/globals.css";
import type { AppProps } from "next/app";
import MovieProvider from "../store/movieContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MovieProvider>
      <Component {...pageProps} />
    </MovieProvider>
  );
}

export default MyApp;
