import React from 'react'

interface Props {
    onSelectCategory: (category: string) => void;
}


const ExpensesFilter = ({ onSelectCategory}: Props) => {
  return (
    <select className='form-select' onChange={(event) => onSelectCategory(event.target.value)}>
        <option>All Categories</option>
        <option value='Groceries'>Groceries</option>
        <option value='Utilities'>Utilities</option>
        <option value='Entertainment'>Entertainment</option>
        <option value='Transportation'>Education</option>
    </select>
  )
}

export default ExpensesFilter