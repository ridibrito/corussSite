import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";

import Seo from "/components/Seo";
import NextNprogress from "nextjs-progressbar";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Seo title={"Coruss"} description={"Bem vindo a liberdade"} />
      <ThemeProvider attribute="class">
        <NextNprogress
          color="#0069d9"
          startPosition={0.3}
          stopDelayMs={200}
          showOnShallow
        />
        <SessionProvider session={session}>
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
