/* eslint-disable react/prop-types */
const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="px-7 py-2 rounded-xl bg-zinc-900 flex flex-col items-center border-white border-[1px]">
      <span className="font-bold text-lg">{month}</span>
      <span className="font-normal text-md">{year}</span>
      <span className="font-medium text-4xl">{day}</span>
    </div>
  );
};

export default ExpenseDate;
