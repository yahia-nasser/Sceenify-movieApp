"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const trimmed = query.trim();
    if (!trimmed) return;

    router.push(`/search?query=${encodeURIComponent(trimmed)}`);
  };

  return (
    <div className="bg-gray-800/60 border border-gray-600 mb-10 p-8 md:p-10 rounded-2xl flex flex-col gap-6">
      <h2 className="text-xl md:text-2xl font-bold">Welcome to Screenify</h2>

      <p className="text-sm md:text-lg text-gray-300">
        Millions of movies and TV shows available. Discover now.
      </p>

      <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-400 outline-none focus:border-red-500 transition"
        />

        <button
          type="submit"
          disabled={!query.trim()}
          className="px-5 py-2 rounded-lg bg-red-600 hover:bg-red-700 disabled:bg-gray-600 hover:cursor-pointer disabled:cursor-not-allowed text-white font-medium transition"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
