"use client";
import { useState, useRef, useContext } from "react";
import ExpenseCategoryItem from "@/components/ExpenseCategoryItem";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import Modal from "@/components/Modal";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";
import SignIn from "@/SignIn";
import { authContext } from "@/authcontext";
import { PiListMagnifyingGlassBold } from "react-icons/pi"; // Import magnifier icon

ChartJS.register(ArcElement, Tooltip, Legend);

const initialExpenses = [];

export default function Home() {
  const [showAddIncomeModal, setShowAddIncomeModal] = useState(false);
  const [expenses, setExpenses] = useState(initialExpenses);
  const [searchQuery, setSearchQuery] = useState(""); // New state for search query
  const { user } = useContext(authContext);
  const itemRef = useRef();
  const quantityRef = useRef();

  const addPantryHandler = async (e) => {
    e.preventDefault();
    const newItem = {
      id: expenses.length + 1,
      title: itemRef.current.value,
      createdAt: new Date(),
      color: "#" + Math.floor(Math.random() * 16777215).toString(16),
      total: Number(quantityRef.current.value),
    };

    const collectionRef = collection(db, "pantry");
    try {
      await addDoc(collectionRef, newItem);
    } catch (error) {
      console.log(error.message);
    }

    setExpenses((prevExpenses) => [...prevExpenses, newItem]);
    setShowAddIncomeModal(false);
  };

  const deleteExpenseHandler = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  const increaseAmountHandler = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === id ? { ...expense, total: expense.total + 1 } : expense
      )
    );
  };

  const decreaseAmountHandler = (id) => {
    setExpenses((prevExpenses) =>
      prevExpenses.map((expense) =>
        expense.id === id && expense.total > 1
          ? { ...expense, total: expense.total - 1 }
          : expense
      )
    );
  };

  if (!user) {
    return <SignIn />;
  }

  // Filter expenses based on search query
  const filteredExpenses = expenses.filter((expense) =>
    expense.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-pantry-bg bg-cover bg-center">
      <Modal show={showAddIncomeModal} onClose={setShowAddIncomeModal}>
        <form onSubmit={addPantryHandler}>
          <div className="flex flex-col gap-4">
            <label htmlFor="item_name">Item Name</label>
            <input
              type="text"
              name="name"
              ref={itemRef}
              placeholder="Enter the items in stock"
              required
              className="w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-4 mt-4">
            <label htmlFor="item_amount">Quantity</label>
            <input
              type="number"
              name="quantity"
              ref={quantityRef}
              min={1}
              step={0.1}
              placeholder="Enter the item quantity"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            + Add Items
          </button>
        </form>
      </Modal>

      <main className="flex flex-col items-center p-5">
        <div className="text-xl font-md mb-5 text-center md:text-left">
          Organize your grocery stocks here!
        </div>

        {/* Search Input Field with Magnifier Icon */}
        <section className="w-full max-w-3xl p-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-2 pr-10 mb-4 border border-gray-300 rounded"
            />
            <PiListMagnifyingGlassBold className="absolute right-3 top-1/3 transform -translate-y-1/2 text-white text-2xl" />
          </div>
        </section>

        <section className="w-full max-w-3xl p-5">
          <h3 className="text-4xl font-bold mb-6 text-center md:text-left">Items in Stock</h3>
          <div className="flex flex-col gap-4">
            {expenses.length === 0 ? (
              <p className="text-center text-xl text-white">
                Stock is Empty! Click "Add" to include items in your stock.
              </p>
            ) : filteredExpenses.length > 0 ? (
              filteredExpenses.map((expense) => (
                <div
                  key={expense.id}
                  className="flex flex-col md:flex-row items-center justify-between gap-4 px-4"
                >
                  <ExpenseCategoryItem
                    className="flex justify-evenly gap-4 w-full md:w-fit"
                    color={expense.color}
                    title={expense.title}
                    total={expense.total}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => increaseAmountHandler(expense.id)}
                      className="bg-gradient-to-r from-green-600 to-green-400 text-white py-2 px-4 text-sm font-semibold rounded-lg shadow-md hover:from-green-500 hover:to-green-300"
                    >
                      + Add
                    </button>
                    <button
                      onClick={() => decreaseAmountHandler(expense.id)}
                      className="bg-gradient-to-r from-yellow-400 to-yellow-200 text-black py-2 px-4 text-sm font-semibold rounded-lg shadow-md hover:from-yellow-300 hover:to-yellow-100"
                      disabled={expense.total <= 1}
                    >
                      - Remove
                    </button>
                    <button
                      onClick={() => deleteExpenseHandler(expense.id)}
                      className="bg-gradient-to-r from-red-600 to-red-400 text-white py-2 px-4 text-sm font-semibold rounded-lg shadow-md hover:from-red-500 hover:to-red-300"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-xl text-white">
                No item(s) found.
              </p>
            )}
          </div>
        </section>

        {/* Move "Add Items" Button Below the Items in Stock Section */}
        <section className="mt-6">
          <button
            onClick={() => setShowAddIncomeModal(true)}
            className="btn btn-primary bg-gradient-to-r from-gray-700 to-gray-500 text-white py-2 px-4 rounded-lg shadow-lg hover:from-gray-600 hover:to-gray-400"
          >
            + Add Items
          </button>
        </section>

        <section className="w-full max-w-3xl p-5 mt-10">
          <h3 className="text-4xl font-bold mb-6 text-center md:text-left">Stats</h3>
          <div className="flex items-center justify-center">
            <div className="w-full max-w-2xl h-[300px]">
              <Pie
                data={{
                  labels: filteredExpenses.map((expense) => expense.title),
                  datasets: [
                    {
                      label: "Expenses",
                      data: filteredExpenses.map((expense) => expense.total),
                      backgroundColor: filteredExpenses.map((expense) => expense.color),
                      borderColor: ["#000"],
                      borderWidth: 1,
                    },
                  ],
                }}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "bottom",
                    },
                  },
                }}
                height={150}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
