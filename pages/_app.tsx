import Preloader from "@/components/Common/Preloader";
import Layout from "@/components/Layout/Layout";
import "@/styles/globals.scss";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { useEffect, useState } from "react";
export const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </motion.div>
    </AnimatePresence>
  );
}
