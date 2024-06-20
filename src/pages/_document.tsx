import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/FOXLOGO.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Oxanium:wght@200..800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Russo+One&display=swap" rel="stylesheet"/>

      </Head>
      <body>
        <Main />
        <NextScript />
        <title>Matar</title>
        <meta
          name="description"
          content=""
        />
        <meta name="keywords" content="FOX" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="FOX" />
        <meta
          property="og:description"
          content=""
        />
        <meta property="og:image" content="/Matar.png" />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="Matar" />
        <meta
          property="twitter:description"
          content="."
        />
        <meta property="twitter:image" content="/Matar.png" />
      </body>
    </Html>
  );
}
