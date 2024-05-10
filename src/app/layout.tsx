import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const font = Poppins({ style: "normal", weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PassGen - Generate Strong, Random, and Secure Passwords",
  description:
    "PassGen is your go-to password generator tool that creates strong, random, and secure passwords with just a click. Enhance your online security effortlessly!"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
