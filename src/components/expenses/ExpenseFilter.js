import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const dropdownHandler = (e) => {
    props.onChangeFilter(e.target.value);
  }

  return (
    <div className="expense-filter">
      <div className="expense-filter__control">
        <label>Filter by year</label>
        <select onChange={dropdownHandler} value={props.selectedYear}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
