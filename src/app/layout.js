import { Inter } from "next/font/google";
import "./globals.css";
import EgoisticNavbar from "@/components/utils/EgosticNavbar";
import EgoisticFooter from "@/components/utils/EgosticFooter";
import 'react-toastify/dist/ReactToastify.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BlushBelle",
  description: "Generated by nikhil Anand",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EgoisticNavbar/>
        {children}
        <EgoisticFooter/>
        </body>
    </html>
  );
}
