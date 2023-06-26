import { Html, Head, Main, NextScript } from "next/document";
import { poppins } from "./_app";

export default function Document() {
  return (
    <Html lang="en" className={`${poppins.className} scroll-smooth`}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
