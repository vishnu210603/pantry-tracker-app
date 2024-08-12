// import { currencyFormatter } from "@/app/lib/utils";

// function ExpenseCategoryItem({ color, title, total }) {
//   return (
//     <button>
//       <div className="flex w-[400px] items-center justify-between p-4 bg-violet-700 rounded-xl">
//         <div className="flex items-center w-full ">
//           <div
//             className="w-[25px] h-[25px] rounded-full border-2 gap-4 "
//             style={{ backgroundColor: color }}
//           />
//           <div className="flex w-full px-4 justify-between">
//           <h4 className="capitalize">{title}</h4>
        
//         <p>{total}</p>
//         </div>
//         </div>
//       </div>
//     </button>
//   );
// }

// export default ExpenseCategoryItem;



function ExpenseCategoryItem({ color, title, total }) {
  return (
    <button className="w-full max-w-md">
      <div className="flex flex-col sm:flex-row items-center justify-between p-4 bg-violet-700 rounded-xl">
        <div className="flex items-center w-full">
          <div
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2"
            style={{ backgroundColor: color }}
          />
          <div className="flex w-full px-4 justify-between items-center">
            <h4 className="text-white capitalize text-sm sm:text-base">{title}</h4>
            <p className="text-white text-sm sm:text-base">{total}</p>
          </div>
        </div>
      </div>
    </button>
  );
}

export default ExpenseCategoryItem;
