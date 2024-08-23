import "../styles/globals.css";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import type { ReactElement, ReactNode } from "react";

import { Header } from "@components/Header";
import { Sidebar } from "@components/Sidebar";

import { karla, nunito } from "@utils/fonts";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout =
    Component.getLayout ??
    ((page: ReactElement) => (
      <>
        <Header />
        <Sidebar />
        <main
          className={`${karla.variable} ${nunito.variable} mt-16 ml-[260px]`}
        >
          {page}
        </main>
      </>
    ));

  return getLayout(<Component {...pageProps} />);
}
