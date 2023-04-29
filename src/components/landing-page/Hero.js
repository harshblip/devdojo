import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { queryClient, QueryClientProvider } from "react-query";
import Home from "../../pages/home";
import img from '../../assets/images/Collaboration-amico.png'

const Hero = () => {
  return (
      <div className="bg-gray-50">
        <div className="relative overflow-hidden">
          <div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
            <div className="relative h-full">
              <svg
                className="heropatt absolute right-full transform translate-y-1/3 translate-x-1/4 md:translate-y-1/2 sm:translate-x-1/2 lg:translate-x-full"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                  </pattern>
                </defs>
                {/* <rect
                  width={404}
                  height={784}
                  fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
                /> */}
              </svg>
              <svg
                className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
              >
                <defs>
                  <pattern
                    id="d2a68204-c383-44b1-b99f-42ccff4e5365"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x={0}
                      y={0}
                      width={4}
                      height={4}
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  width={404}
                  height={784}
                  fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
                />
              </svg>
            </div>
          </div>
          <motion.div
            initial={{ y: 120, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative pt-6 pb-16 sm:pb-24"
          >
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:px-6">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block h1 text-black ">Matchmaker, but for</span>
                  <span className="block h2 text-gray-400 underline">web developers</span>
                </h1>
                <p className="py-2 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  Discover creative websites and developers across the globe. A
                  portal for you to share your projects and get inspired for
                  free.
                </p>
                <div className="mt-12 gap-x-4 gap-y-2 flex flex-wrap justify-center">
                  <Link href="/signup" legacyBehavior>
                    <a className="px-8 py-3 trans border border-transparent text-base font-medium rounded-md text-white bg-black/80 hover:bg-white transition-all transition-0.4s hover:text-black md:py-3 md:text-lg md:px-6 inline-block">
                      Join Community
                    </a>
                  </Link>
                  <Link href="/home" legacyBehavior>
                    <a className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-black bg-gray-200 md:py-3 md:text-lg md:px-6 inline-block">
                      Discover Posts
                      {/* Your app components */}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="relative">
            <div className="absolute inset-0 flex flex-row" aria-hidden="true">
              <div className="flex-1" />
              <div className="flex-1 w-full" />
            </div>
            <motion.div
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.75 }}
              className="max-w-7xl mx-auto px-4 sm:px-6"
            >
              <div className="flex flex-row" >
              <Image
                className="relative rounded-lg shadow-lg"
                src={img}
                width={420}
                height={480}
              />
                <div>
                <p className="text-5xl font-bold py-32 px-24"> <span className = "text-gray-500"> Meet and help </span> each other through our platform </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="bg-black/70 pb-12"></div>
      </div>
  );
};

export default Hero;
