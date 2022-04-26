import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="overflow-x-hidden relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
    <Head>
      <title>flightpkg | home</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Swift, reliable, multi-language package manager."
      />
      <meta property="og:title" content={`flightpkg | home`} />
      <meta
        property="og:description"
        content="Swift, reliable, multi-language package manager."
      />
      <meta property="og:url" content="https://flightpkg.js.org" />
      <meta property="og:type" content="website" />
    </Head>
    {children}
  </div>
);

export default Layout;