/* eslint-disable react/prop-types */
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString,
    };
    props.onAddExpense(expenseData);
  }
  return (
    <div className="px-9 py-6 bg-zinc-300 rounded-xl text-black flex flex-col items-center justify-center gap-8 lg:w-fit md:w-fit">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
