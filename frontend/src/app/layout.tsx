'use client'
import { Provider } from "urql";
import "./globals.css";
import client from "./utils/client";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body>
        <Provider value={client}>
          {children}
        </Provider>
      </body>
    </html>
  );
}
