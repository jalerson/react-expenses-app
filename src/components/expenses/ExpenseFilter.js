import './ExpenseFilter.css';

export default function ExpenseFilter(props) {
  const onChange = (event) => {
    props.onChange(event.target.value);
  }

  return (
    <div class="expense-filter">
      <select onChange={onChange}>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  )
}
