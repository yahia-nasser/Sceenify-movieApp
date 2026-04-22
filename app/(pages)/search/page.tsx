import WishlistButton from "@/app/_components/MovieCard/AddBTN";
import Search from "@/app/_components/Search/Search";
import Image from "next/image";
import Link from "next/link";

type Movie = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
};

async function getMovies(query: string): Promise<Movie[]> {
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=44b9119ee754beaaa4bd7276b7be5bd2&query=${encodeURIComponent(query)}`,
    { cache: "no-store" },
  );

  if (!res.ok) throw new Error("Failed to fetch");

  const data = await res.json();
  return data.results;
}

type Props = {
  searchParams: Promise<{ query?: string }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const params = await searchParams;
  const query = params.query;

  if (!query) return <p>No search query provided.</p>;

  const movies = await getMovies(query);

  return (
    <div className="p-6 w-full md:w-[80%] mx-auto">
      <Search />

      <h2 className="text-2xl font-bold my-6">Results for: {query}</h2>

      {movies.length === 0 && <p>No movies found.</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <div
            key={movie.id}
            className="card bg-base-100 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:scale-[1.03]"
          >
            <Link href={`/movieDetails/${movie.id}`}>
              <figure className="w-full">
                <Image
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "/no-image.png"
                  }
                  alt={movie.title}
                  width={300}
                  height={450}
                  className="w-full h-87.5 object-cover"
                />
              </figure>
            </Link>

            <div className="card-body my-2">
              <h2 className="card-title mb-2 font-bold">{movie.title}</h2>

              <p>
                {movie.overview
                  ? movie.overview.length > 100
                    ? movie.overview.slice(0, 90) + "..."
                    : movie.overview
                  : "No description available"}
              </p>

              <div className="card-actions justify-between items-center my-3 flex-wrap gap-2">
                <h4 className="text-gray-500 text-sm">
                  {movie.release_date || "N/A"}
                </h4>

                <h4 className="font-bold">
                  ⭐ {movie.vote_average?.toFixed(1) || "0.0"}
                </h4>
                <WishlistButton movie={movie} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
