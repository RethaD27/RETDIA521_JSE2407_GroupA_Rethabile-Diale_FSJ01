import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'Next.js E-commerce',
  description: 'A simple e-commerce site built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
