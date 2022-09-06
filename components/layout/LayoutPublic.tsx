import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
}
export default function Layoutpublic({ children }: Props) {
  return (
    <>
      <div>{children}</div>
    </>
  );
}
