import React from 'react';
import { Category } from '../types/Category';

export const categories: Category = {
    food: { title: 'Alimentação', expense: true },
    rent: { title: 'Aluguel', expense: true },
    salary: { title: 'Salário', expense: false }
}