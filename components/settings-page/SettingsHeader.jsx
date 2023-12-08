import { Disclosure } from '@headlessui/react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const SettingsHeader = () => {
  return (
    <Disclosure as="div" className="relative bg-black-600 pb-32 overflow-hidden">
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
          <header className="relative py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold text-white">Settings</h1>
            </div>
          </header>
        </>
      )}
    </Disclosure>
  );
};

export default SettingsHeader;
