import getRecommendations from "@/app/apis/Recommending";
import getSingleMovie from "@/app/apis/SingleMovie";
import { Details, Result } from "@/app/types/movies";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import WishlistButton from "@/app/_components/MovieCard/AddBTN";

const MovieDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const res: Details = await getSingleMovie(id);
  const { results } = await getRecommendations(id);

  return (
    <div className="w-full md:w-[80%] mx-auto flex justify-between items-center gap-5 min-h-screen flex-col my-10">
      <div className="w-[90%] shadow mx-auto flex justify-between items-center gap-5 min-h-screen md:flex-row flex-col my-10 border bg-gray-800/60 border-gray-500 p-10 rounded-xl">
        <figure className="md:w-[30%] w-[80%]">
          <Image
            src={`https://image.tmdb.org/t/p/w500${res.poster_path}`}
            alt={res.title}
            width={300}
            height={300}
            className="w-full rounded-xl"
          />
        </figure>
        <div className="flex flex-col gap-5 w-full md:w-[60%]">
          <h2 className="text-4xl font-bold">{res.title}</h2>
          <p className="text-xl">
            Release Date:{" "}
            <span className="text-gray-500">{res.release_date}</span>
          </p>
          <p className="text-xl">
            Rating:{" "}
            <span className="text-red-500">{res.vote_average.toFixed(1)}</span>
          </p>
          <p className="italic text-xl">{res.overview}</p>
          <div className="flex gap-5 md:flex-row flex-wrap">
            {res.genres.map((genre) => {
              return (
                <p
                  key={genre.id}
                  className="btn btn-outline btn-error rounded-full"
                >
                  {genre.name}
                </p>
              );
            })}
          </div>
          <p className="text-xl">
            Duration: <span className="text-gray-500">{res.runtime} Mins</span>
          </p>
          <p className="text-xl">
            Language:{" "}
            <span className="text-gray-500">{res.original_language}</span>
          </p>
          <div className="w-1/4">
            <WishlistButton movie={res} />
          </div>
        </div>
      </div>
      <div className=" w-[80%] md:w-full mx-auto border border-gray-500 p-5 rounded-xl mb-10">
        <h2 className="text-3xl font-bold mb-10">Recommended Movies</h2>
        <Carousel>
          <CarouselContent>
            {results.map((movie: Result) => {
              return (
                <CarouselItem
                  key={movie.id}
                  className="flex gap-1 flex-col basis-1/2 lg:basis-1/6"
                >
                  <Link href={`/movieDetails/${movie.id}`}>
                    <Image
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      width={300}
                      height={300}
                      className=" rounded-xl"
                    ></Image>
                    <h3>{movie.title}</h3>
                    <h4 className="text-gray-500">{movie.release_date}</h4>
                    <h4 className="font-bold">
                      ⭐ {movie.vote_average?.toFixed(1) || "0.0"}
                    </h4>
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default MovieDetails;
