import { IoMdNotifications } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

import ThemeToggle from "./toggle";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Navtop() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      <nav className="fixed z-10">
        <div className="justify-between shadow fixed bg-white dark:bg-gray-700 w-full h-16  flex items-center px-4 duration-300">
          <div className="flex">
            <div className="flex">
              <div className="mt-8 mb-5 cursor-pointer">
                <Link href={`/app/${router.query.tenantId}`}>
                  <Image
                    src="/logosite.png"
                    alt="logo alb"
                    width="180"
                    height="35"
                  />
                </Link>
              </div>
            </div>
          </div>
          <ThemeToggle />
          <div className="flex mr-3">
            <IoMdNotifications
              className="cursor-pointer text-sky-600 hover:text-sky-700 p-2 w-10 h-10 mr-5 mt-1.5 hover:bg-sky-100 bg-sky-100 p- 
            rounded-full"
            />
            <span className="flex -ml-7 mt-7 py-1 px-2 leading-none text-center text-sm whitespace-nowrap align-baseline font-bold bg-red-600 text-white rounded">
              3
            </span>

            <div className="flex items-center">
              <div className="flex items-center text-sm font-semibold ml-5">
                {session?.user?.name}
                <Image
                  className="border rounded-full"
                  //@ts-ignore
                  src={session?.user?.image}
                  //@ts-ignore
                  alt={session?.user?.name}
                  width="50"
                  height="50"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
