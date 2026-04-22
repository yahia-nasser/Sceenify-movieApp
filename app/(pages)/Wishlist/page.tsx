"use client";

import { useState } from "react";
import { getWishlist, removeFromWishlist, AddMovie } from "@/app/lib/wishlist";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";

export default function WishlistPage() {
  const [movies, setMovies] = useState<AddMovie[]>(() => getWishlist());

  const handleRemove = (id: number) => {
    removeFromWishlist(id);
    toast.success("Removed Successfully !", {
      duration: 2000,
      position: "top-center",
    });
    setMovies(getWishlist());
  };

  return (
    <div className="p-6 min-h-175 relative">
      <h1 className="text-4xl font-bold my-4 md:text-start text-center">
        My Wishlist
      </h1>

      {movies.length === 0 && (
        <div className="text-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg
            width="210px"
            height="210px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#828282"
            transform="matrix(1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M10 9.5L14 13.5M14 9.5L10 13.5M12 6.59097L11.8456 6.42726C9.86802 4.33054 6.5974 4.57698 4.91936 6.94915C3.43 9.05459 3.78669 12.0335 5.72501 13.6776L12 19L18.275 13.6776C20.2133 12.0335 20.57 9.05459 19.0807 6.94915C17.4026 4.57698 14.132 4.33054 12.1544 6.42726L12 6.59097Z"
                stroke="#9c9c9c"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </g>
          </svg>
          <p className="text-gray-500 text-3xl">No movies yet</p>
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-5 justify-between items-center gap-7">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="card bg-base-100 flex flex-column items-center justify-between gap-3 rounded-xl shadow-md h-full p-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.02]"
          >
            {movie.poster_path ? (
              <Link href={`/movieDetails/${movie.id}`}>
                <Image
                  src={movie.poster_path}
                  alt={movie.title}
                  width={200}
                  height={200}
                  className="w-full object-cover rounded-lg mb-2"
                />
              </Link>
            ) : (
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-2 flex items-center justify-center">
                No Image
              </div>
            )}

            <h3 className="md:text-xl text-lg font-bold">{movie.title}</h3>

            <button
              onClick={() => handleRemove(movie.id)}
              className="mt-5 md:w-1/2 md:text-xl text-lg transition btn hover:btn-error btn-outline mx-auto"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
