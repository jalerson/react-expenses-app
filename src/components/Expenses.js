import './Expenses.css';
import ExpenseItem from "./ExpenseItem";

export default function Expenses(props) {
  const expenses = [];
  for(let i = 0; i < props.expenses.length; i++) {
    expenses.push(
      <ExpenseItem 
        title={props.expenses[i].title}
        date={props.expenses[i].date}
        amount={props.expenses[i].amount}
      />
    );
  }
  
  return (
    <div>
      {expenses}
    </div>
  )
}
