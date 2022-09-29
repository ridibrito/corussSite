import { Item } from '../../types/item';
import { categories } from './categories';

export const items:Item[] = [
    {date: new Date(2022,8,26), category:'service', title: 'internet', value:89.90},
    {date: new Date(2022,8,26), category:'rent', title: 'Aluguel loja',  value:700.00},
    {date: new Date(2022,8,26), category:'food',title: 'Mercado dia-a-dia', value:100.00},
    {date: new Date(2022,9,5), category:'Salary',title: 'Salário DEV',  value:2800},
]