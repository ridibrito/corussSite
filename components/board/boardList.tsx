import List from "../list/index";
import { loadLists } from "../../pages/services/api";
import { useState } from "react";
import BoardContext from "./context";

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);
  
//@ts-ignore
  function move(fromList, toList, from, to, cards) {
    

  }
  return (
    <BoardContext.Provider value={{ lists, move }}>
      <div className="">
        {lists.map((list, index) => (
          <List key={list.title} index={index}  data={list} />
        ))}
      </div>
    </BoardContext.Provider>
  );
}
