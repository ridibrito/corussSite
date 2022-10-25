import { formatDate } from "helpers/dateFilter";
import { BsPen, BsTrash } from "react-icons/bs";
import { Item } from "../../types/item";
import { categories } from '../../service/categories'

type Props ={
    items: Item
}

export const TableItem = ({ items }: Props) => {
    return(
        <tr>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <a href="#" className="block relative">
                        
                    </a>
                </div>
                <div className="ml-3">
                    <p className="text-gray-900 whitespace-no-wrap w-72">
                        {items.title}
                    </p>
                </div>
            </div>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap w-24">
               {categories.items.title}
            </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            <p className="text-gray-900 whitespace-no-wrap w-24">
                {formatDate(items.date)}
            </p>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-24">
            <span className={categories.expense  ? "relative inline-block px-3 py-1 font-semibold text-red-900 leading-tight" : "relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"}>
                <span aria-hidden="true" className={categories.expense ? "absolute inset-0 bg-red-200 opacity-50 rounded-full": "absolute inset-0 bg-green-200 opacity-50 rounded-full"}>
                </span>
                <span className="relative" >
                    {items.value}
                </span>
            </span>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-20">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                <BsPen />
            </a>
        </td>
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm w-20">
            <a href="#" className="text-indigo-600 hover:text-indigo-900">
                <BsTrash />
            </a>
        </td>
    </tr>
    )
}