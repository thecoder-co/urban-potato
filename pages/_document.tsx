import Document, {
  Html,
  Head,
  Main,
  NextScript,
} from "next/dist/pages/_document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="alternate"
            type="application/rss+xml"
            title="RSS"
            href="https://qarr.vercel.app/rss.xml"
          />
          <meta
            name="keywords"
            content="Abimbola, Idunnuoluwa, Abimbola Idunnuoluwa, Flutter, dart, app dev"
          />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          <meta name="theme-color" content="#fff" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
