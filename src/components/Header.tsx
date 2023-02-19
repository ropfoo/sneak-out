import { useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchMoviesBar from "./Search/SearchMoviesBar";
import Image from "next/image";
import defaultProfileImage from "../public/assets/profile_default.png";

export default function Header() {
  const { pathname } = useRouter();
  const isSearchMoviesPage = pathname === "/";

  const { data: session } = useSession();

  console.log(session);
  return (
    <header className="sticky top-0 flex w-full flex-col bg-slate-900 p-4 text-slate-300">
      <div className="mb-4 flex items-center justify-between">
        <Link href={"/"}>
          <p>search</p>
        </Link>
        <Link href={"/profile"}>
          <div className="w-12">
            <Image
              src={session?.user?.image ?? defaultProfileImage}
              width={48}
              height={48}
              alt="profile image"
            />
          </div>
        </Link>
      </div>
      {isSearchMoviesPage && <SearchMoviesBar />}
    </header>
  );
}
// session?.user?.image ??
