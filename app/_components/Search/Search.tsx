const Search = () => {
  return (
    <div className="bg-gray-800/60 border border-gray-600 mb-10 p-10 rounded-2xl flex flex-col gap-7 ">
      <h2 className="md:text-2xl font-bold capitalize">Welcome to Screenify</h2>
      <p className="md:text-xl font-semibold capitalize">
        milions of movies and tv shows available on Screenify , Discover Now
      </p>
      <label className="input">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input type="search" required placeholder="Search" />
      </label>
    </div>
  );
};

export default Search;
