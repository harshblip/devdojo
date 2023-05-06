import Head from "next/head";
import Hero from "../components/landing-page/Hero.js";
import Home from "./home.jsx";
import Login from "./login.js";
import Search from "./search.jsx/index.js";
import Signup from "./signup.js";
import Settings from "./settings.js";
import Notif from "./notifications.js";
import Feed from "./feed.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import Message from "./message.js";
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
      <Navbar />
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
