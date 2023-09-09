import { useState } from 'react';

import './expenseForm.css';

export default function ExpenseForm(props) {
  const [userInput, setUserInput] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const onChange = (event) => {
    let newInput = {
      ...userInput
    };
    newInput[event.target.dataset.field] = event.target.value;
    setUserInput(newInput);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    props.onSubmit({
      title: userInput.title,
      amount: userInput.amount,
      date: new Date(userInput.date),
    });

    setUserInput({
      title: '',
      amount: '',
      date: '',
    });
  }

  return (
    <form onSubmit={onSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' data-field='title' value={userInput.title} onChange={onChange} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' data-field='amount' value={userInput.amount} onChange={onChange} />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2023-01-01' max='2024-12-31' data-field='date' value={userInput.date} onChange={onChange} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
}
