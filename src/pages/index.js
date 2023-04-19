import Head from "next/head";
import Hero from "../components/landing-page/Hero.js";
import Home from "./home";
import Login from "./login";
import Search from "./search";
import Signup from "./signup";
import Settings from "./settings";
import Notif from "./notifications";
import Feed from "./feed";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Message from "./message";
import New from "./posts/new.jsx";
import Token from "./onboarding/[token].jsx";
import Features from "../components/landing-page/Features.js";
import CTA from "../components/landing-page/CTA.js";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

export function getServerSideProps() {
  return {
    props: { title: "Driwwwle - The Social Network for Developers" },
  };
}

const queryClient = new QueryClient();

function index() {
  return (
    <>
      {/* <Hero />
      <Features />
      <CTA /> */}
      {/* <Home /> */}
      {/* <Navbar /> */}
      <Hero />
      <Features />
      <CTA />
      {/* <New /> New Post */}
      {/* <Token /> create profile */}
      {/* <Settings /> */}
      {/* <Login /> */}
      {/* <Search /> */}
      {/* <Notif /> */}
      {/* <Signup /> */}
      {/* <Message /> */}
      <Footer />
    </>
  );
}

export default index;
