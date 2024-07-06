import { ExpenseItem } from "./ExpenseItem";
import { dummy_expenses } from "./Data";
import NewExpense from "./NewExpense";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";

const Expense = () => {
  const [filterYear, setFilterYear] = useState("2021");
  const [expenses, setExpense] = useState(dummy_expenses);

  function addExpenseData(expense) {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  }

  function filterChangeHandler(selectedYear) {
    setFilterYear(selectedYear);
  }
  const filterExpenses = expenses.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filterYear;
  });

  let expenseContent = <p>No data found</p>;
  if (filterExpenses.length > 0) {
    expenseContent = filterExpenses.map((item) => (
      <ExpenseItem
        title={item.title}
        amount={item.amount}
        date={item.date}
        key={item.id}
      />
    ));
  }
  return (
    <>
      <div className="min-h-screen w-full bg-zinc-800 text-white flex flex-col items-center justify-center gap-4">
        <NewExpense onAddExpense={addExpenseData} />
        <div className="px-9 py-6 bg-zinc-900 rounded-xl flex flex-col items-center justify-center gap-8 lg:w-[60%] md:w-fit">
          <ExpenseFilter
            selected={filterYear}
            onChangeFilter={filterChangeHandler}
          />
          {expenseContent}
        </div>
      </div>
    </>
  );
};

export default Expense;
