import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import Sidebar from "../components/sidebar/Sidebar";
import Nav from "../components/nav/nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <Sidebar />
      <Nav />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
