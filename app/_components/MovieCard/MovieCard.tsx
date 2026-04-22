"use client";

import getAllMovies from "@/app/apis/allMovies";
import { Movie } from "@/app/types/movies";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import WishlistButton from "./AddBTN";
import { motion } from "framer-motion";

const MovieCard = () => {
  const [results, setResults] = useState<Movie[]>([]);
  useEffect(() => {
    async function getAll() {
      const data = await getAllMovies();
      setResults(data);
    }
    getAll();
  }, []);
  const container = {
    hidden: { opacity: 1 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full flex justify-center flex-wrap gap-10 my-10 "
    >
      {results.map((movie: Movie) => {
        return (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="card bg-base-100 w-65 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03]"
          >
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
            <div className="card-body my-2">
              <h2 className="card-title mb-2 font-bold">{movie.title}</h2>
              <p>
                {movie.overview.length > 100
                  ? movie.overview.slice(0, 90) + "..."
                  : movie.overview}
              </p>
              <div className="card-actions justify-between items-center my-3">
                <h4 className="text-gray-500">
                  Release Date: {movie.release_date}
                </h4>

                <WishlistButton movie={movie} />
              </div>
              <h4 className="font-bold">
                ⭐ {movie.vote_average?.toFixed(1) || "0.0"}
              </h4>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default MovieCard;
