import { useState } from "react";
import './Expenses.css';
import ExpenseItem from "./ExpenseItem";
import Card from '../ui/Card';
import ExpenseFilter from './ExpenseFilter';

export default function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState(2023);

  const expenses = [];
  for(let i = 0; i < props.expenses.length; i++) {
    expenses.push(
      <ExpenseItem 
        title={props.expenses[i].title}
        date={props.expenses[i].date}
        amount={props.expenses[i].amount}
        key={i}
      />
    );
  }

  const onChangeFilter = (year) => {
    setSelectedYear(year);
  }
  
  return (
    <Card className="expenses">
      <p>The selected year is {selectedYear}</p>
      <ExpenseFilter onChange={onChangeFilter} />
      {expenses}
    </Card>
  )
}
