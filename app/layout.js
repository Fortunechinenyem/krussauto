import { DefaultSeo } from "next-seo";
import { Inter } from "next/font/google";
import Head from "next/head";
import styles from "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kruss Auto Services",
  description: "An Auto Services Site, catering for your auto needs.",
  canonical: "https://www.krussautoserv.ng/",
  openGraph: {
    url: "https://www.krussautoserv.ng/",
    title: "Kruss Automotive Services",
    description: "An Auto Services Site, catering for your auto needs.",
    images: [
      {
        url: "https://www.krussautoserv.ng/krusslogo.svg",
        width: 1200,
        height: 630,
        alt: "Kruss Auto Logo",
      },
    ],
    site_name: "Kruss Automotive Services",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <style>{styles}</style>
      </Head>
      <body className="font-body">
        <DefaultSeo {...metadata} />
        {children}
      </body>
    </html>
  );
}
