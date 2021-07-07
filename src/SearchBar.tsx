const SearchBar = () => {
  return (
    <div className="bg-white flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border rounded-lg border-gray-200">
      <button className="outline-none focus:outline-none">
        <svg
          className="w-5 h-5 cursor-pointer text-red-400"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
      <input
        type="search"
        name=""
        id=""
        placeholder="Search"
        className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
      />
    </div>
  );
};

export default SearchBar;
