/* eslint-disable react/prop-types */
import ExpenseDate from "./ExpenseDate";
export const ExpenseItem = (props) => {
  return (
    <div className="px-10 py-3 bg-zinc-700 rounded-xl flex items-center justify-between lg:w-full md:w-fit">
      <ExpenseDate date={props.date} />
      <h1 className="font-bold text-4xl">{props.title}</h1>
      <div className="px-6 py-3 bg-blue-600 rounded-xl font-bold text-2xl border-[1px] border-white">
        ${props.amount}
      </div>
    </div>
  );
};
