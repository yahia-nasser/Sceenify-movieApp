import MovieCard from "./_components/MovieCard/MovieCard";
import Search from "./_components/Search/Search";

export default function Home() {
  return (
    <main className="mx-auto w-[80%] my-10">
      <Search />
      <section className="my-10 flex justify-center gap-5">
        <MovieCard />
      </section>
    </main>
  );
}
