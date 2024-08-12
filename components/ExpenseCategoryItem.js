function ExpenseCategoryItem({ color, title, total }) {
  return (
    <button className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-violet-500 rounded-xl shadow-md shadow-gray-700 border-white border-2 text-md font-semibold">
        <div className="flex items-center w-full">
          <div
            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-black border-2"
            style={{ backgroundColor: color }}
          />
          <div className="flex w-full px-4 justify-between items-center">
            <h4 className="text-white capitalize text-md sm:text-xl">{title}</h4>
            <p className="text-white text-sm sm:text-base">{total}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default ExpenseCategoryItem;
