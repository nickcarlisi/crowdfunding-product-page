import "./styles/globals.scss";
import { Commissioner } from "next/font/google";

const commissioner = Commissioner({ subsets: ["latin"] });

export const metadata = {
  title: "Crowdfunding Product Page",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={commissioner.className}>{children}</body>
    </html>
  );
}