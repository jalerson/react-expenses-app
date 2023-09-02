import ExpenseForm from './expenseForm'

import './newExpense.css';

export default function NewExpense(props) {
  const onSubmit = (newExpense) => {
    props.onSubmit({
      ...newExpense,
      id: Date.parse(newExpense.date),
    });
  }

  return (
    <div className='new-expense'>
      <ExpenseForm onSubmit={onSubmit} />
    </div>
  );
}
