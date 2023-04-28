import "@/styles/globals.css";
import "@/styles/homepage.css";
import Navbar from "../components/Navbar";
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {

  return(
<main className = {inter.className}>
<Navbar />
<Component {...pageProps} />
</main>
    )
}
