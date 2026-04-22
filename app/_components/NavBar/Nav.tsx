import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w-full md:w-[80%] mx-auto flex justify-between items-center py-2 px-4 md:rounded-2xl bg-[#1f1f1f]">
      <div className="logo">
        <Link href="/">
          <h1 className="text-2xl font-bold">Screenify</h1>
        </Link>
      </div>
      <div className="wishlist">
        <Link href="/Wishlist" className="btn btn-outline btn-error">
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
          Wish List
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
