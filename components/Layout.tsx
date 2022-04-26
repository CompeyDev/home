import React, { ReactNode } from "react";
import Head from "next/head";
import Link from 'next/link';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div className="overflow-x-hidden relative min-h-screen flex flex-col justify-center items-center bg-hero bg-cover">
    <Head>
      <title>DevComp | home</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Swift, reliable, multi-language package manager."
      />
      <meta property="og:title" content={`DevComp | home`} />
      <meta
        property="og:description"
        content="Hi, I'm DevComp, a JavaScript developer."
      />
      <meta property="og:url" content="https://devcomp.xyz" />
      <meta property="og:type" content="website" />
      <link rel="icon" type="image/x-icon" href="https://github.com/CompeyDev.png">
    </Head>
    {children}
  </div>
);

export default Layout;
