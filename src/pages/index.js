import Hero from '../components/landing-page/Hero.js';
import Home from './home';
import Login from './login';
import Search from './search';
import Signup from './signup';
import Navbar from '../components/Navbar';
import Settings from './settings';
import Features from '../components/landing-page/Features.js';
import CTA from '../components/landing-page/CTA.js';
import { QueryClient, QueryClientProvider, useInfiniteQuery } from 'react-query';

export function getServerSideProps() {
  return {
    props: { title: 'Driwwwle - The Social Network for Developers' },
  };
}

const queryClient = new QueryClient();

function index(){
  return (
    <>
      {/* <Hero />
      <Features />
      <CTA /> */}
      <QueryClientProvider client={queryClient}>
      <Navbar />
        {/* <Home /> */}
      {/* <Login /> */}
        {/* <Search /> */}
        <Settings />
        {/* <Signup /> */}
      </QueryClientProvider>
    </>
  );
}


export default index;