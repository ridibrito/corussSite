import Link from "next/link"
import { useRouter } from "next/router"
import React from "react"


interface Props {
    children: React.ReactNode
    href: String
}

const LinkMenu = ({ children, href }: Props) => {

    const router = useRouter()
    const { pathname } = router
    const selected = pathname === href

    return (
        //@ts-ignore
        <Link href={href}>
            <a className={selected? "flex dark:text-gray-300 dark:bg-gray-400 dark:bg-opacity-20 items-center pt-2 pl-2 pb-2 text-sky-600 hover:cursor-pointer  rounded-md m-2":"flex items-center pt-2 pl-2 pb-2 dark:text-gray-200  text-gray-500 hover:text-sky-600 dark:hover:text-gray-500 hover:cursor-pointer rounded-md m-2"}>
                {children}
            </a>
        </Link>
                )
}
export default LinkMenu