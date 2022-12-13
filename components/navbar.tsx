import Image from "next/image";
import { RiDashboardFill } from "react-icons/ri";
import { MdComputer } from "react-icons/md";
import { AiFillMail } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { FaBuffer } from "react-icons/fa";
import DropAdm from "./dropadm";
import DropFinan from "./dropfinan";
import LinkMenu from "./LinkMenu";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navbar() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <>
      <nav className="pt-3 bg-white dark:bg-gray-700 fixed z-20 w-56 min-h-screen shadow-lg mt-0 pl-3 pr-3 overflow-y-auto">
        <div className="grid grid-cols-1 items-end">
          <div className="flex">
            <div className="flex">
              <div className="mt-2 mb-5 cursor-pointer">
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

          <LinkMenu href={`/app/${router.query.tenantId}`}>
            <RiDashboardFill className="w-7 h-7 mr-2" />
            Dashboard
          </LinkMenu>

          <LinkMenu href={`/app/${router.query.tenantId}/crm`}>
            <MdComputer className="w-7 h-7 mr-2" />
            CRM
          </LinkMenu>

          <LinkMenu
            href={`/app/${router.query.tenantId}/adm/cadastro/CadastroClientes`}
          >
            <DropAdm />
          </LinkMenu>

          <LinkMenu href={`/app/${router.query.tenantId}/financeiro`}>
            <DropFinan />
          </LinkMenu>

          <LinkMenu href={`/app/${router.query.tenantId}/simulador`}>
            <FaBuffer className="w-8 h-8 mr-2" />
            Simulador
          </LinkMenu>

          <div className="pt-32">
            <LinkMenu href={`/app/${router.query.tenantId}/config`}>
              <IoIosSettings className="w-8 h-7 mr-2" />
              Configurações
            </LinkMenu>

            <span className="flex items-center text-sm pr-4 justify-center mx-auto text-gray-500 hover:text-sky-600 hover:cursor-pointer  rounded-md m-2">
              <RiLogoutCircleRLine className="w-4 h-5 mr-2" />
              <button
                onClick={() => {
                  signOut({ callbackUrl: "/" });
                  router.push("/app");
                }}
              >
                Logout
              </button>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}
