export default function ExpenseFilter(props) {
  const onChange = (event) => {
    props.onChange(event.target.value);
  }

  return (
    <select onChange={onChange}>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
      <option value="2023">2023</option>
    </select>
  )
}
