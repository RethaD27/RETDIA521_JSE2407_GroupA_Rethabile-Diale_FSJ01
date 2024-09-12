import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'QuickCart Emporium',
  description: 'Discover Amazing Products at Great Prices',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-sans bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 min-h-screen">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {children}
        </main>
      </body>
    </html>
  );
}