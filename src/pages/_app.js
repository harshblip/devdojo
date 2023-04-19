import "@/styles/globals.css";
import "@/styles/homepage.css";
// import { QueryClientProvider, queryClient } from "./queryClient";

export default function App({ Component, pageProps }) {
  // <QueryClientProvider client={queryClient}>
    return <Component {...pageProps} />
  // </QueryClientProvider>;
}
