import { Disclosure } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SettingsHeader = () => {
  return (
    <Disclosure as="div" className="relative bg-black-600 pb-24 overflow-hidden">
      {({ open }) => (
        <>
          <div
            className={classNames(
              open ? 'bottom-0' : 'inset-y-0',
              'absolute flex justify-center inset-x-0 left-1/2 transform -translate-x-1/2 w-full overflow-hidden lg:inset-y-0'
            )}
            aria-hidden="true"
          >
            <div className="flex-grow bg-black-100 bg-black" />
            <div className="flex-grow bg-black-800 bg-black" />
          </div>
          <header className="relative pt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
              <h1 className="text-3xl font-bold mb-2">Advanced Search</h1>
              <p className="text-lg">Search for posts, users and tags </p>
            </div>
          </header>
        </>
      )}
    </Disclosure>
  );
};

export default SettingsHeader;
