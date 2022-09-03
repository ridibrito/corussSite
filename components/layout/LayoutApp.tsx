import React from "react";
import Navbar from "../navbar";
import Navtop from "../navtop";

interface Props {
    children: React.ReactNode
}

export default function LayoutApp({children}: Props) {
    return (<>
      <Navtop/>
      <Navbar/>
      { children }
      </>);
  }
  