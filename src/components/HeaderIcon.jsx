function HeaderIcon({ Icon, active }) {
  return (
    // using es16 structuring for pulling in icons
    <div
      className="flex items-center cursor-pointer md:px-10sm:h-14 md:hover:bg-gray-100
    rounded-xl active:border-b-2 active:border-blue-500 group sm:h7- mx-auto p-2
    "
    >
      <Icon
        className={`h-5 group-hover:text-blue-500 sm:h-7 mx-auto
         text-center ${ active && "text-blue-500" }`}
      />
    </div>
  );
}

export default HeaderIcon;
