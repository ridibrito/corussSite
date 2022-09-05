import Link from 'next/link'
import React from 'react'



interface Props {
    children: React.ReactNode
}
export default function Layoutpublic({ children }: Props) {
    return(<><div>
        <Link href="/app"><a>app</a></Link>
        <h1>Site</h1>
        { children }


        </div></>)
}