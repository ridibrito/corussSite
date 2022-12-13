import { Item } from "../../types/item";
import { useState } from "react";
import { categories } from "../../service/categories";
import { newDateAdjusted } from "../../helpers/dateFilter";

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState("");
  const [categoryField, setCategoryField] = useState("");
  const [titleField, setTitleField] = useState("");
  const [valueField, setValueField] = useState(0);

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];

    if (isNaN(new Date(dateField).getTime())) {
      errors.push("Data inválida!");
    }
    if (!categoryKeys.includes(categoryField)) {
      errors.push("Categoria inválida!");
    }
    if (titleField === "") {
      errors.push("Título vazio!");
    }
    if (valueField <= 0) {
      errors.push("Valor inválido!");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      onAdd({
        date: newDateAdjusted(dateField),
        category: categoryField,
        title: titleField,
        value: valueField,
      });
      clearFields();
    }
  };

  const clearFields = () => {
    setDateField("");
    setCategoryField("");
    setTitleField("");
    setValueField(0);
  };

  return (
    <div className="bg-white dark:bg-gray-700 dark:text-gray-400 mx-auto px-10 rounded-lg shadow-lg mt-3 py-10 max-w-7xl sm:flex flex-wrap items-center justify-between">
      <div className=" relative px-3">
        <label
          htmlFor="name-with-label"
          className="text-gray-700 dark:text-gray-400"
        >
          Título
        </label>
        <input
          type="text"
          id="name-with-label"
          className="block w-52 text-gray-700 py-2 px-3 border border-gray-400 bg-white dark:bg-gray-700 dark:text-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          name="email"
          placeholder="Digite aqui seu lançamento"
          value={titleField}
          onChange={(e) => setTitleField(e.target.value)}
        />
      </div>

      <div className=" relative px-3">
        <label
          htmlFor="name-with-label"
          className="text-gray-700 dark:text-gray-400"
        >
          Categoria
        </label>

        <select
          id="name-with-label"
          className="block w-52 text-gray-700 py-3 px-3 border border-gray-300 bg-white dark:bg-gray-700 dark:text-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          value={categoryField}
          onChange={(e) => setCategoryField(e.target.value)}
        >
          {categoryKeys.map((key, index) => (
            <option value="" key={index}>
              {categories[key].title}
            </option>
          ))}
        </select>
      </div>

      <div className=" relative px-3">
        <label
          htmlFor="name-with-label"
          className="text-gray-700 dark:text-gray-400"
        >
          Data
        </label>
        <input
          type="date"
          id="name-with-label"
          className="block w-52 text-gray-700 py-2 px-3 border border-gray-400 bg-white dark:bg-gray-700 dark:text-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          name="currency"
          placeholder="R$"
          value={dateField}
          onChange={(e) => setDateField(e.target.value)}
        />
      </div>

      <div className=" relative px-3">
        <label
          htmlFor="name-with-label"
          className="text-gray-700 dark:text-gray-400"
        >
          Valor
        </label>
        <input
          type="number"
          id="name-with-label"
          className="block w-52 text-gray-700 py-2 px-3 border border-gray-300 bg-white dark:bg-gray-700 dark:text-gray-400 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          name="currency"
          placeholder="R$"
          value={valueField}
          onChange={(e) => setValueField(parseFloat(e.target.value))}
        />
      </div>

      <div className="ml-3 mt-6">
        <button
          onClick={handleAddEvent}
          className="bg-sky-600 text-white hover:bg-sky-700 rounded shadow px-4 py-2"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
};
