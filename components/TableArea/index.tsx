import { TableItem } from "../TableItem";
import { Item } from "../../types/item";

type Props = {
  list: Item[];
};

export const TableArea = ({ list }: Props) => {
  return (
    <div>
      <div className="mx-auto px-4 max-w-7xl rounded  ">
        <div className="py-8">
          <div className=" sm:-mx-8 px-4 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow-lg rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal ">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-7 py-5 bg-white dark:text-gray-400 dark:bg-gray-700  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold"
                    >
                      Título
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold dark:text-gray-400 dark:bg-gray-700 "
                    >
                      Categoria
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold dark:text-gray-400 dark:bg-gray-700 "
                    >
                      Data
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-bold dark:text-gray-400 dark:bg-gray-700 "
                    >
                      Valor
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal dark:text-gray-400 dark:bg-gray-700 "
                    ></th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal dark:text-gray-400 dark:bg-gray-700 "
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((items, index) => (
                    <TableItem key={index} items={items} />
                  ))}
                </tbody>
              </table>
              <div className="px-5 bg-white dark:text-gray-400 dark:bg-gray-700  py-5 flex flex-col xs:flex-row items-center xs:justify-between">
                <div className="flex items-center dark:text-gray-400 dark:bg-gray-700 ">
                  <button
                    type="button"
                    className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white dark:text-gray-400 dark:bg-gray-700  hover:bg-gray-100"
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      className=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 bg-white hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-700  "
                  >
                    1
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-700 "
                  >
                    2
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-700 "
                  >
                    3
                  </button>
                  <button
                    type="button"
                    className="w-full px-4 py-2 border text-base text-gray-600 bg-white hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-700 "
                  >
                    4
                  </button>
                  <button
                    type="button"
                    className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-700 "
                  >
                    <svg
                      width="9"
                      fill="currentColor"
                      height="8"
                      className=""
                      viewBox="0 0 1792 1792"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
