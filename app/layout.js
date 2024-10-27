import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>BIN Checker</title>
      </head>
      <body className="bg-gray-100 text-gray-900 flex items-center justify-center min-h-screen">
        {children}
      </body>
    </html>
  );
}
