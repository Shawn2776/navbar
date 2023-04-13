import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import { SessionProvider } from "next-auth/react";
import { Oswald } from "next/font/google";
import "../styles/globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <div className={oswald.className}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
