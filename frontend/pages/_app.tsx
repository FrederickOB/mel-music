import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Sidebar from "../components/sidebar/Sidebar";
import Nav from "../components/nav/nav";
import NowPlayingBar from "../components/nowPlayingBar/nowPlayingBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Sidebar />
      <Nav />
      <Component {...pageProps} />
      <NowPlayingBar />
    </ThemeProvider>
  );
}

export default MyApp;
