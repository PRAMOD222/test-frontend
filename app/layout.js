import localFont from "next/font/local";
import ReduxProvider from "@/store/reduxProvider";
import Cart from "./components/Cart";
import NextTopLoader from 'nextjs-toploader';
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const mulish = localFont({
  src: "./fonts/Mulish.woff",
  variable: "--font-mulish-sans",
});
const cormorant = localFont({
  src: "./fonts/Cormorant.woff",
  variable: "--font-cormorant-sans",
});


export const metadata = {
  title: "Al Forno ",
  description: "Al Forno",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ReduxProvider>
        <body className={`${mulish.variable} ${cormorant.variable} antialiased`}>
        <ToastContainer
          position="top-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark" />
          <NextTopLoader color="#c19f5f" showSpinner={false} />
          {children}
          <div>
            <Cart />
          </div>
        </body>
      </ReduxProvider>
    </html>
  );
}
