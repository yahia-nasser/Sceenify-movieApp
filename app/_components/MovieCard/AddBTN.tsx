"use client";

import { useState } from "react";
import {
  addToWishlist,
  removeFromWishlist,
  isInWishlist,
} from "../../lib/wishlist";
import { AddMovie } from "@/app/lib/wishlist";
import { toast } from "sonner";

type Props = {
  movie: AddMovie;
};

export default function WishlistButton({ movie }: Props) {
  const [added, setAdded] = useState(() => isInWishlist(movie.id));
  const formatMovie = (movie: AddMovie): AddMovie => {
    return {
      id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : "",
    };
  };
  const toggle = () => {
    if (added) {
      removeFromWishlist(movie.id);
      toast.success("Removed Successfully !", {
        duration: 2000,
        position: "top-center",
      });
    } else {
      addToWishlist(formatMovie(movie));
      toast.success("Added Successfully !", {
        duration: 2000,
        position: "top-center",
      });
    }

    setAdded(!added);
  };

  return (
    <button
      onClick={toggle}
      className={`p-2 rounded-full transition-all duration-300 cursor-pointer
  ${
    added
      ? "bg-red-500 text-white scale-110"
      : "bg-gray-200 text-gray-600 hover:bg-red-100 hover:text-red-500"
  }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill={added ? "currentColor" : "none"}
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className="w-6 h-6 transition-all duration-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </button>
  );
}
