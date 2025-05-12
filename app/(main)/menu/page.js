"use client";

import { useState } from "react";

import { Toaster, toast } from "sonner";

import { FaEgg, FaFish, FaCat, FaPhp } from "react-icons/fa";
import { FaShrimp, FaWheatAwn } from "react-icons/fa6";
import { LuMilk } from "react-icons/lu";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiPeanut } from "react-icons/gi";

export default function Menu() {
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
      <h1 className="mb-4 text-2xl">Menu</h1>
      <div className="flex h-full w-full items-center justify-start gap-4">
        <div className="flex h-[500px] w-8/12 flex-col overflow-y-hidden rounded-xl border-2 border-black">
          <table className="w-full table-fixed border-spacing-0">
            <thead>
              <tr>
                <th className="px-6 py-4">Thumbnail</th>
                <th className="px-6 py-4">Dish Name</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Details</th>
              </tr>
            </thead>
          </table>

          <div className="no-scrollbar h-full overflow-y-scroll border-t-2">
            <table className="h-full w-full table-fixed border-spacing-0">
              <tbody className="h-full">
                <tr>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Image
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Dish Name
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    $xx.xx
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Active
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Edit
                  </td>
                </tr>

                <tr>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Image
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Dish Name
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    $xx.xx
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Active
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Edit
                  </td>
                </tr>

                <tr>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Image
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Dish Name
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    $xx.xx
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Active
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Edit
                  </td>
                </tr>

                <tr>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Image
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Dish Name
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    $xx.xx
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Active
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Edit
                  </td>
                </tr>

                <tr>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Image
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Dish Name
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    $xx.xx
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Active
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Edit
                  </td>
                </tr>

                <tr>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Image
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Dish Name
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    $xx.xx
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Active
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Edit
                  </td>
                </tr>

                <tr>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Image
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Dish Name
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    $xx.xx
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Active
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Edit
                  </td>
                </tr>

                <tr>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Image
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Dish Name
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    $xx.xx
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Active
                  </td>
                  <td className="border-b-2 border-black px-6 py-6 text-center">
                    Edit
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="no-scrollbar h-[500px] w-4/12 overflow-y-scroll rounded-xl border-2 border-black p-4">
          <h2 className="mb-2 text-xl font-semibold select-none">Add New Dish</h2>

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
                    isClicked[0] ? "bg-blue-300" : "bg-white"
                  }`}
                  title="Egg"
                >
                  <FaEgg />
                </div>
                <div
                  onClick={() => iconClickHandler(1)}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black ${
                    isClicked[1] ? "bg-blue-300" : "bg-white"
                  }`}
                  title="Fish"
                >
                  <FaFish />
                </div>
                <div
                  onClick={() => iconClickHandler(2)}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black ${
                    isClicked[2] ? "bg-blue-300" : "bg-white"
                  }`}
                  title="Shrimp"
                >
                  <FaShrimp />
                </div>
                <div
                  onClick={() => iconClickHandler(3)}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black ${
                    isClicked[3] ? "bg-blue-300" : "bg-white"
                  }`}
                  title="Wheat"
                >
                  <FaWheatAwn />
                </div>
                <div
                  onClick={() => iconClickHandler(4)}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black ${
                    isClicked[4] ? "bg-blue-300" : "bg-white"
                  }`}
                  title="Milk"
                >
                  <LuMilk />
                </div>

                <div
                  onClick={() => iconClickHandler(5)}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black ${
                    isClicked[5] ? "bg-blue-300" : "bg-white"
                  }`}
                  title="Junk Food"
                >
                  <IoFastFoodSharp />
                </div>

                <div
                  onClick={() => iconClickHandler(6)}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black ${
                    isClicked[6] ? "bg-blue-300" : "bg-white"
                  }`}
                  title="Peanut"
                >
                  <GiPeanut />
                </div>

                <div
                  onClick={() => iconClickHandler(7)}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black ${
                    isClicked[7] ? "bg-blue-300" : "bg-white"
                  }`}
                  title="Cat"
                >
                  <FaCat />
                </div>

                <div
                  onClick={() => iconClickHandler(8)}
                  className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black ${
                    isClicked[8] ? "bg-blue-300" : "bg-white"
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
                  className="flex-1 cursor-pointer rounded-full border px-4 py-1"
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
                className="flex-1 cursor-pointer rounded-full border py-1"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
