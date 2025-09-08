import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="./favicon.svg" type="image/svg+xml" />
        <script
          defer
          src="https://umami.mbudiman.com/script.js"
          data-website-id="bd6fdce4-b472-4003-a12f-0a6224c9f6a7"
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
