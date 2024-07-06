/* eslint-disable react/prop-types */
const ExpenseFilter = (props) => {
  function dropDownHandler(event) {
    props.onChangeFilter(event.target.value);
  }
  return (
    <div className="flex items-center justify-between w-full">
      <label className="text-lg font-semibold">Filter By Year</label>
      <select
        value={props.selected}
        onChange={dropDownHandler}
        className="rounded-lg px-10 py-2 text-black font-semibold appearance-auto"
      >
        <option value="2024">2024</option>
        <option value="2023">2023</option>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
        <option value="2019">2019</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
