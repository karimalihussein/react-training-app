import { categories } from '../../../App';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
    description: z.string().min(3).max(50),
    amount: z.number().min(1).max(10000),
    category: z.enum(['Groceries', 'Utilities', 'Entertainment', 'Education'])
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
    onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ExpenseFormData>({ resolver: zodResolver(schema)});
  return (
    <form onSubmit={handleSubmit(data => {
        onSubmit(data);
        reset();
    })}>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <input {...register('description')} type="text" className="form-control" id="description" />
            {errors.description && <p className='text-danger'>{errors.description.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>
            <input {...register('amount', { valueAsNumber: true })} type="number" className="form-control" id="amount" />
            {errors.amount && <p className='text-danger'>{errors.amount.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
            <select {...register('category')}  className='form-select' id="category">
                <option value="">Select Category</option>
                {categories.map((category, index) => <option key={index} value={category}>{category}</option>)}
            </select>
            {errors.category && <p className='text-danger'>{errors.category.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default ExpenseForm;