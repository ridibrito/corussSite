import ListList from "../list/listList";
import { loadLists } from "../../pages/services/api";
import { Provider, useState } from "react";
import BoardContext from "./context";

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);

 
  return (
    <BoardContext.Provider value={{lists}}>
      <div className="py-8 block">
        {lists.map(list => (
          <ListList key={ListList.title}  data={list} />
        ))}
      </div>
    </BoardContext.Provider>
  );
}
