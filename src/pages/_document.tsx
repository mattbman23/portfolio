import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="./favicon.svg" type="image/svg+xml" />
     <script defer src="https://umami.mbudiman.com/script.js" data-website-id="0e8d5768-d85c-49c0-8314-798ad8fcb0ea"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
