import Link from "next/link";
import { useRouter } from "next/router";
import SearchMoviesBar from "./Search/SearchMoviesBar";
import Avatar from "./Avatar";

export default function Header() {
  const { pathname } = useRouter();
  const isSearchMoviesPage = pathname === "/";

  return (
    <header className="sticky top-0 z-20 flex w-full flex-col bg-dark/90 p-4 pt-10 text-lightgray backdrop-blur-2xl">
      <div className="mb-4 flex items-center justify-between">
        <Link href={"/"}>
          <p>search</p>
        </Link>
        <Avatar />
      </div>
      {isSearchMoviesPage && <SearchMoviesBar />}
    </header>
  );
}
