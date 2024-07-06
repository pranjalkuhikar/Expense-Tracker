/* eslint-disable react/prop-types */
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  }
  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="flex items-center justify-center gap-3">
          <div>
            <input
              type="text"
              placeholder="Title"
              value={enteredTitle}
              onChange={titleChangeHandler}
              className="text-black border-[1px] border-zinc-900 px-4 py-2 rounded-lg text-center font-semibold text-xl"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Amount"
              min={0.01}
              step={0.01}
              value={enteredAmount}
              onChange={amountChangeHandler}
              className="text-black border-[1px] border-zinc-900 px-4 py-2 rounded-lg text-center font-semibold text-xl"
            />
          </div>
          <div>
            <input
              type="date"
              placeholder="Date"
              min={2019}
              max={2024}
              value={enteredDate}
              onChange={dateChangeHandler}
              className="text-black border-[1px] border-zinc-900 px-4 py-2 rounded-lg text-center font-semibold text-xl"
            />
          </div>
          <div className="px-4 py-2 bg-red-600 text-white border-[1px] border-zinc-300 rounded-lg text-center font-semibold text-xl">
            <button type="submit">Add Expense</button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;
