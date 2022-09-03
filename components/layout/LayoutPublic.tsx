import React from 'react'



interface Props {
    children: React.ReactNode
}
export default function Layoutpublic({ children }: Props) {
    return(<><div>
        <h1>Site</h1>
        { children }
        </div></>)
}