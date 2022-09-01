import List from "../list/index";
import { loadLists } from "../../pages/services/api";
import { useState } from "react";
import BoardContext from "./context";

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);
  

  function move(fromList, toList, from, to, cards) {
    

  }
  return (
    <BoardContext.Provider value={{ lists, move }}>
      <div className="flex py-8">
        {lists.map((list, index) => (
          <List key={list.title} index={index}  data={list} />
        ))}
      </div>
    </BoardContext.Provider>
  );
}
