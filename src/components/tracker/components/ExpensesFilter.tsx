import React from 'react'
import { categories } from '../../../App';

interface Props {
    onSelectCategory: (category: string) => void;
}


const ExpensesFilter = ({ onSelectCategory}: Props) => {
  return (
    <select className='form-select' onChange={(event) => onSelectCategory(event.target.value)}>
        <option value="">All Categories</option>
        {categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
    </select>
  )
}

export default ExpensesFilter