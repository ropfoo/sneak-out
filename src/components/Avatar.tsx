import Link from "next/link";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import defaultProfileImage from "../public/assets/profile_default.png";

export default function Avatar() {
  const { data: session, status } = useSession();

  if (status === "loading")
    return (
      <div className="w-12">
        <Image
          src={defaultProfileImage}
          width={48}
          height={48}
          alt="profile image"
        />
      </div>
    );

  if (status === "unauthenticated")
    return (
      <button className="h-12" onClick={() => signIn()}>
        login
      </button>
    );

  return (
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
  );
}
