import { NextSeo } from "next-seo";
import { AppProps } from "next/app";
import "../styles/globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../public/data.json";
import Head from "next/head";


function MyApp({ Component, pageProps }: AppProps) {
  if (typeof window === "object") {
    AOS.init();
  }

  return (
    <>
      <NextSeo
        title={data.name}
        titleTemplate={data.name}
        defaultTitle={data.name}
        description={data.about}
        canonical="https://www.avneesh.tech/"
        openGraph={{
          url: "https://www.avneesh.tech/",
          title: data.name,
          description: data.about,
          images: [
            {
              url: "https://www.avneesh.tech/og-image.png",
              width: 800,
              height: 420,
              alt: data.name,
            },
          ],
          profile: {
            firstName: "Idunnuoluwa",
            gender: "Male",
            lastName: "Abimbola",
            username: "Qarr",
          },
        }}
        twitter={{
          handle: "@qarr__",
          site: "@qarr__",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="https://www.avneesh.tech/rss.xml"
        />
        <meta
          property="og:image"
          content="https://www.avneesh.tech/og-image.png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
