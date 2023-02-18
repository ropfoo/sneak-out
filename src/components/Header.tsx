import Link from "next/link";
import { useRouter } from "next/router";
import SearchMoviesBar from "./Search/SearchMoviesBar";

export default function Header() {
  const { pathname } = useRouter();
  const isSearchMoviesPage = pathname === "/";

  return (
    <header className="sticky top-0 flex w-full flex-col bg-slate-900 p-4 text-slate-300">
      <p>hello party people!</p>
      <Link href={"/profile"}>
        <p>profile</p>
      </Link>
      <Link href={"/"}>
        <p>start</p>
      </Link>
      {isSearchMoviesPage && <SearchMoviesBar />}
    </header>
  );
}
