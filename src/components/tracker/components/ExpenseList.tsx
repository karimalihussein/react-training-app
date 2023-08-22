interface Expenses {
    id: number;
    description: string;
    amount: number;
    category: string;
}

interface Props {
    expenses: Expenses[];
    onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
    if(expenses.length === 0) return (<div className="alert alert-info">No expenses found</div>);
    return (
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.id}>
                        <td>{expense.description}</td>
                        <td>{expense.amount}</td>
                        <td>{expense.category}</td>
                        <td>
                        <button className="btn btn-danger" onClick={() => onDelete(expense.id)}> Delete </button>
                        </td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={4}>
                        Total: ${expenses.reduce((acc, curr) => acc + curr.amount, 0)}
                    </td>
                </tr>
            </tfoot>
        </table>
    );
};

export default ExpenseList;