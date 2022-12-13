import Link from "next/link";
import { AiFillHome, AiOutlinePlus } from "react-icons/ai";
import AddCliente from "../../../../components/forms/FormAddCliente";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TableArea } from "/components/TableArea";
import { Item } from "../../../../types/item";
import { categories } from "../../../../service/categories";
import { items } from "../../../../service/items";
import {
  filterListByMonth,
  getCurrentMonth,
} from "../../../../helpers/dateFilter";
import { InfoArea } from "/components/InfoArea";
import { InputArea } from "/components/InputArea";

export default function Lancamentos() {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentmonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  const router = useRouter();
  const [showPopUpCliente, setShowPopUpCliente] = useState(false);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentmonth));
  }, [list, currentmonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories.expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }
    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  };

  const handleNewCliente = () => {
    setShowPopUpCliente(true);
  };

  const handleAddItem = (items: Item) => {
    let newList = [...list];
    newList.push(items);
    setList(newList);
  };

  return (
    <>
      <div className=" h-screen overflow-y-scroll dark:text-gray-500 dark:bg-gray-600 bg-gray-100 pl-60 pt-16 pr-4">
        <div className="flex justify-between mt-1 items-center">
          <div className="flex items-center py-4">
            <Link href={`/app/${router.query.tenantId}`}>
              <a>
                <AiFillHome className="dark:text-gray-300 dark:bg-gray-600 hover:text-sky-600 text-gray-500 w-5 h-5" />
              </a>
            </Link>
            <h3 className="ml-3 text-xl font-normal text-gray-500 dark:text-gray-300 dark:bg-gray-600">
              -
            </h3>
            <h3 className=" ml-3 pt-1 font-normal text-gray-500 ">
              <Link href={`/app/${router.query.tenantId}/financeiro`}>
                <a className="hover:text-sky-600 cursor-pointer dark:text-gray-300 dark:bg-gray-600">
                  Financeiro
                </a>
              </Link>
            </h3>

            <h3 className=" ml-3 pt-1 font-normal text-gray-500 dark:text-gray-300 dark:bg-gray-600">
              / Lançamentos
            </h3>
          </div>
        </div>
        <hr></hr>
        <div></div>
        <InfoArea
          currentMonth={currentmonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredList} />
      </div>
    </>
  );
}
