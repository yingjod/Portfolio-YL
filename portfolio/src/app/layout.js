import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ying Li",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href="icon.png" sizes="any" /> 
      </Head>
      <body className={inter.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
