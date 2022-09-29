import {
    BsFillArrowLeftSquareFill,
    BsFillArrowRightSquareFill,
  } from "react-icons/bs";
  import { formatCurrentMonth } from "../../helpers/dateFilter";
  import { ResumeItem } from "../ResumeItem.tsx";

  type Props = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
}
  
  export const InfoArea = ({ currentMonth, onMonthChange, income, expense }:Props) => {
  
    const handlePrevMonth = () => {
      let [year, month] = currentMonth.split("-");
      let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
      currentDate.setMonth(currentDate.getMonth() - 1);
      onMonthChange(
        `${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`
      );
    };
  
    const handleNextMonth = () => {
      let [year, month] = currentMonth.split("-");
      let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1);
      currentDate.setMonth(currentDate.getMonth() + 1);
      onMonthChange(
        `${currentDate.getFullYear()} - ${currentDate.getMonth() + 1}`
      );
    };
  
    return (
      <div className="container flex justify-between px-5 bg-white shadow mt-3  h-20 mx-auto max-w-7xl rounded-lg">
        <div className="max-w-7xl flex items-center justify-between sm:w-1/3 w-1/2">
          <BsFillArrowLeftSquareFill
            onClick={handlePrevMonth}
            className="w-10 h-10 text-sky-600 cursor-pointer"
          />
          <div>
            <h1 className="text-xl ">{formatCurrentMonth(currentMonth)}</h1>
          </div>
          <BsFillArrowRightSquareFill
            onClick={handleNextMonth}
            className="w-10 h-10 text-sky-600 cursor-pointer"
          />
        </div>
        <div className="flex items-center justify-between mx-20 sm:w-2/3 w-1/2">
        <ResumeItem title={'Receitas'} value={income.toFixed(2)}/>
        <ResumeItem title={'Despesas'} value={expense.toFixed(2)}/>
        <ResumeItem title={'Balanço'} value={(income - expense).toFixed(2)}/>
          
        </div>
      </div>
    );
  };
  