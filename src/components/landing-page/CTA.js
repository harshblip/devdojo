import Link from 'next/link';

const CTA = () => {
  return (
    <div className="bg-black/10">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Ready to dive in?</span>
          <span className="block text-gray-400">Join DevDojo today</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link href="/signup" legacyBehavior>
              <a className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-black/70 hover:bg-gray-500 transition-all ">
                Get started
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;