import React from 'react'

interface Props {
    children: React.ReactNode
}
export default function LayoutEmpty({ children }: Props) {
    return<>
    { children }
    </>

}