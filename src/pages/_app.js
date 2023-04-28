import "@/styles/globals.css";
import Navbar from "../components/Navbar";
import { Inter, Roboto } from "next/font/google";

const roboto = Roboto ({
  subsets: ['latin'],
  weight: '400',
})

const inter = Inter({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
