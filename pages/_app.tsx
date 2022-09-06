import "../styles/globals.css";
import { useRouter } from "next/router";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import LayoutApp from "../components/layout/LayoutApp";
import Layoutpublic from "../components/layout/LayoutPublic";
import LayoutTenant from "../components/layout/LayoutTenant";
import LayoutEmpty from "../components/layout/LayoutEmpty";


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {


  const router = useRouter()
  const { pathname }  = router
  let Layout = Layoutpublic
  if(pathname.indexOf('/app') === 0) {
    Layout = LayoutApp
  }
  if(pathname.indexOf('/[slug]') === 0) {
    Layout = LayoutTenant
  }
  if (pathname === '/app'){
    Layout = LayoutEmpty
  }
  return (
    <>
      <ThemeProvider attribute="class">
        <SessionProvider session={session}>
          <Layout>
            
            <Component {...pageProps} />
          </Layout>
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
