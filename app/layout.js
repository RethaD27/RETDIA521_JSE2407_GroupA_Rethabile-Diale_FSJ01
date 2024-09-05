export const metadata = {
  title: 'Next.js E-commerce',
  description: 'A simple e-commerce site built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}