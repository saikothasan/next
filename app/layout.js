import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>BIN Checker</title>
      </head>
      <body className="bg-gray-100 text-gray-900 min-h-screen">
        <nav className="p-4 bg-gray-200 fixed w-full top-0">
          <ul className="flex space-x-4 justify-center">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </nav>
        <main className="pt-20 flex justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
