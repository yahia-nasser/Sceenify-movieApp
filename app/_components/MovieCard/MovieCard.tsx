"use client";
import getAllMovies from "@/app/apis/allMovies";
import { Movie } from "@/app/types/movies";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const MovieCard = () => {
  const [results, setResults] = useState<Movie[]>([]);
  useEffect(() => {
    async function getAll() {
      const data = await getAllMovies();
      setResults(data);
    }
    getAll();
  }, []);

  return (
    <div className="w-full flex justify-center flex-wrap gap-10 my-10">
      {results.map((movie: Movie) => {
        return (
          <div key={movie.id} className="card bg-base-100 w-65 shadow-sm">
            <Link href={`/movieDetails/${movie.id}`}>
              <figure className="w-full">
                <Image
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  width={200}
                  height={200}
                  className="w-full"
                />
              </figure>
            </Link>
            <div className="card-body border-t-2 border-gray-600 my-5">
              <h2 className="card-title">{movie.title}</h2>
              <p>
                {movie.overview.length > 100
                  ? movie.overview.slice(0, 100) + "..."
                  : movie.overview}
              </p>
              <div className="card-actions justify-between items-center my-3">
                <h4 className="text-gray-500">
                  Release Date: {movie.release_date}
                </h4>

                <h4 className="font-bold">
                  Rating: {movie.vote_average.toFixed(1)}
                </h4>

                <button className="btn btn-circle btn-outline btn-error">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    className="size-[1.2em]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCard;
