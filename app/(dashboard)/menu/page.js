"use client";
import { useState } from "react";

import { Toaster, toast } from "sonner";

import { FaEgg, FaFish, FaCat, FaPhp } from "react-icons/fa";
import { FaShrimp, FaWheatAwn } from "react-icons/fa6";
import { LuMilk } from "react-icons/lu";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiPeanut } from "react-icons/gi";

import menuData from "@/data/menu.json";
import TableRow from "./TableRow";

export default function Menu() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedDish, setSelectedDish] = useState(null);

  const handleDeleteClick = (dishName) => {
    setSelectedDish(dishName);
    setShowPopup(true);
  };

  const handleConfirmDelete = () => {
    console.log(`Deleted: ${selectedDish}`);
    setShowPopup(false);
    setSelectedDish(null);
    toast.success("Item deleted successfully!");
  };

  const handleCancelDelete = () => {
    setShowPopup(false);
    setSelectedDish(null);
  };

  const [formData, setFormData] = useState({
    dishName: "",
    description: "",
    price: "",
    ingredients: "",
    nutritionalInfo: "",
    modelFileName: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [isClicked, setIsClicked] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const iconClickHandler = (index) => {
    // Toggle the clicked state for the specific icon
    setIsClicked((prevState) =>
      prevState.map((clicked, i) => (i === index ? !clicked : clicked)),
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Form submitted successfully!");

    setIsClicked([
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ]);

    setFormData({
      dishName: "",
      description: "",
      price: "",
      ingredients: "",
      nutritionalInfo: "",
      modelFileName: "",
    });
  };

  return (
    <>
      <h1 className="mb-4 text-2xl select-none">Menu</h1>
      <div className="flex h-full w-full items-center justify-start gap-4">
        <div className="flex h-[500px] w-8/12 flex-col overflow-y-hidden rounded-xl border-2 border-black">
          <table className="w-full table-fixed border-spacing-0 bg-[#EBE3D3]">
            <thead>
              <tr>
                <th className="px-6 py-4">Thumbnail</th>
                <th className="px-6 py-4">Dish Name</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Action</th>
              </tr>
            </thead>
          </table>

          <div className="no-scrollbar h-full overflow-y-scroll border-t-2">
            <table className="h-full w-full table-fixed border-spacing-0">
              <tbody className="h-full">
                {Object.entries(menuData).map(([dishName, dishDetails]) => (
                  <TableRow
                    key={dishName}
                    image={
                      <img
                        src={dishDetails.image}
                        alt={dishName}
                        className="h-12 w-12 object-cover"
                      />
                    }
                    dishName={dishName}
                    price={`$${dishDetails.price.toFixed(2)}`}
                    status={dishDetails.status}
                    onDelete={() => handleDeleteClick(dishName)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="no-scrollbar h-[500px] w-4/12 overflow-y-scroll rounded-xl border-2 border-black p-4">
          <h2 className="mb-2 text-xl font-semibold select-none">
            Add New Dish
          </h2>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label className="mb-1 block text-sm select-none">
                Dish Name
              </label>
              <input
                type="text"
                className="w-full rounded border px-2 py-1"
                name="dishName"
                value={formData.dishName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label className="mb-1 block text-sm select-none">
                Description
              </label>
              <input
                type="text"
                className="w-full rounded border px-2 py-1"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="mb-1 block text-sm select-none">Price</label>
                <input
                  type="number"
                  min="0"
                  className="w-full rounded border px-2 py-1"
                  name="price"
                  value={formData.price}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="flex-1">
                <label className="mb-1 block text-sm select-none">
                  Ingredients
                </label>
                <input
                  type="text"
                  className="w-full rounded border px-2 py-1"
                  name="ingredients"
                  value={formData.ingredients}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm select-none">
                Nutritional info
              </label>
              <input
                type="text"
                className="w-full rounded border px-2 py-1"
                name="nutritionalInfo"
                value={formData.nutritionalInfo}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="mb-1 block text-sm select-none">
                Allergen Icons
              </label>
              <div className="mt-1 flex gap-2">
                <div
                  onClick={() => iconClickHandler(0)}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black ${
                    isClicked[0] ? "bg-blue-300" : "bg-[#ededed]"
                  }`}
                  title="Egg"
                >
                  <FaEgg />
                </div>
                <div
                  onClick={() => iconClickHandler(1)}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black ${
                    isClicked[1] ? "bg-blue-300" : "bg-[#ededed]"
                  }`}
                  title="Fish"
                >
                  <FaFish />
                </div>
                <div
                  onClick={() => iconClickHandler(2)}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black ${
                    isClicked[2] ? "bg-blue-300" : "bg-[#ededed]"
                  }`}
                  title="Shrimp"
                >
                  <FaShrimp />
                </div>
                <div
                  onClick={() => iconClickHandler(3)}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black ${
                    isClicked[3] ? "bg-blue-300" : "bg-[#ededed]"
                  }`}
                  title="Wheat"
                >
                  <FaWheatAwn />
                </div>
                <div
                  onClick={() => iconClickHandler(4)}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black ${
                    isClicked[4] ? "bg-blue-300" : "bg-[#ededed]"
                  }`}
                  title="Milk"
                >
                  <LuMilk />
                </div>

                <div
                  onClick={() => iconClickHandler(5)}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black ${
                    isClicked[5] ? "bg-blue-300" : "bg-[#ededed]"
                  }`}
                  title="Junk Food"
                >
                  <IoFastFoodSharp />
                </div>

                <div
                  onClick={() => iconClickHandler(6)}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black ${
                    isClicked[6] ? "bg-blue-300" : "bg-[#ededed]"
                  }`}
                  title="Peanut"
                >
                  <GiPeanut />
                </div>

                <div
                  onClick={() => iconClickHandler(7)}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black ${
                    isClicked[7] ? "bg-blue-300" : "bg-[#ededed]"
                  }`}
                  title="Cat"
                >
                  <FaCat />
                </div>

                <div
                  onClick={() => iconClickHandler(8)}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black ${
                    isClicked[8] ? "bg-blue-300" : "bg-[#ededed]"
                  }`}
                  title="Worst Language In The World"
                >
                  <FaPhp />
                </div>
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm select-none">3D Model</label>
              <div className="flex gap-2 select-none">
                <input
                  type="file"
                  id="fileInput"
                  className="hidden"
                  onChange={(event) => {
                    const file = event.target.files[0];
                    if (file) {
                      setFormData((prevData) => ({
                        ...prevData,
                        modelFileName: file.name,
                      }));
                    }
                  }}
                />
                <input
                  type="text"
                  placeholder="File name"
                  className="flex-1 rounded border px-2 py-1"
                  name="modelFileName"
                  value={formData.modelFileName}
                  readOnly
                />
                <button
                  type="button"
                  className="flex-1 cursor-pointer rounded-full border bg-[#C2B59B] px-4 py-1"
                  onClick={() => document.getElementById("fileInput").click()}
                >
                  Upload
                </button>
              </div>
            </div>
            <div className="flex pt-4 select-none">
              <Toaster
                position="bottom-right"
                visibleToasts={1}
                duration={1500}
                richColors
              />
              <button
                type="submit"
                className="flex-1 cursor-pointer rounded-full border bg-[#C2B59B] py-1"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>

      {showPopup && (
        <div
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/70"
          onClick={handleCancelDelete}
        >
          <div
            className="rounded-lg bg-white p-6 shadow-lg"
            onClick={(event) => event.stopPropagation()}
          >
            <p className="mb-4 text-lg">
              Are you sure you want to delete
              <span className="text-red-400 italic"> {selectedDish} </span>?
            </p>
            <div className="flex justify-end gap-4">
              <button
                className="cursor-pointer rounded bg-red-500 px-4 py-2 text-white select-none hover:bg-red-600"
                onClick={handleConfirmDelete}
              >
                Confirm
              </button>

              <Toaster
                position="bottom-right"
                visibleToasts={1}
                duration={1500}
                richColors
              />
              <button
                className="cursor-pointer rounded bg-gray-300 px-4 py-2 text-black select-none hover:bg-gray-400"
                onClick={handleCancelDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
