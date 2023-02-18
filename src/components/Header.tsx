import Link from "next/link";
import SearchBar from "./Search/SearchBar";

export default function Header() {
  return (
    <header className="sticky top-0 flex w-full flex-col bg-slate-900 p-4 text-slate-300">
      <p>hello party people!</p>
      <SearchBar />
      <Link href={"/profile"}>
        <p>profile</p>
      </Link>
      <Link href={"/"}>
        <p>start</p>
      </Link>
    </header>
  );
}
