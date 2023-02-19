import "@/src/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppType } from "next/app";
import Layout from "../components/Layout";
import { trpc } from "../utils/trpc";

const App: AppType = ({ Component, pageProps }) => {
  return (
    <SessionProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
};

export default trpc.withTRPC(App);
