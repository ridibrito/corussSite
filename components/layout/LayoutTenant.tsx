import React from 'react'



interface Props {
    children: React.ReactNode
}
export default function LayoutTenant({ children }: Props) {
    return(<><div>
        <h1>Tenant layout</h1>
        { children }
        </div></>)
}