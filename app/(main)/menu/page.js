import { FaEgg, FaFish } from "react-icons/fa";
import { FaShrimp, FaWheatAwn } from "react-icons/fa6";
import { LuMilk } from "react-icons/lu";
import { IoFastFoodSharp } from "react-icons/io5";

export default function Menu() {
  return (
    <>
      <h1 className="mb-4 text-2xl">Menu</h1>
      <div className="flex h-full w-full items-center justify-start gap-4">
        <div className="flex h-[500px] w-8/12 flex-col rounded-xl overflow-y-hidden border-2 border-black">
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
          <button className="mb-4 block w-full cursor-pointer rounded-full border py-1 font-semibold">
            + Add Dish
          </button>

          <h2 className="mb-2 text-xl font-semibold">Edit Dish</h2>

          <form className="space-y-3">
            <div>
              <label className="mb-1 block text-sm">Dish Name</label>
              <input type="text" className="w-full rounded border px-2 py-1" />
            </div>
            <div>
              <label className="mb-1 block text-sm">Description</label>
              <input type="text" className="w-full rounded border px-2 py-1" />
            </div>
            <div className="flex gap-2">
              <div className="flex-1">
                <label className="mb-1 block text-sm">Price</label>
                <input
                  type="text"
                  className="w-full rounded border px-2 py-1"
                />
              </div>
              <div className="flex-1">
                <label className="mb-1 block text-sm">Ingredients</label>
                <input
                  type="text"
                  className="w-full rounded border px-2 py-1"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm">Nutritional info</label>
              <input type="text" className="w-full rounded border px-2 py-1" />
            </div>
            <div>
              <label className="mb-1 block text-sm">Allergen Icons</label>
              <div className="mt-1 flex gap-2">
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black">
                  <FaEgg />
                </div>
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black">
                  <FaFish />
                </div>
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black">
                  <FaShrimp />
                </div>
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black">
                  <FaWheatAwn />
                </div>
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black">
                  <LuMilk />
                </div>
                <div className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-black">
                  <IoFastFoodSharp />
                </div>
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm">3D Model</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="File name"
                  className="flex-1 rounded border px-2 py-1"
                />
                <button
                  type="button"
                  className="flex-1 cursor-pointer rounded-full border px-4 py-1"
                >
                  Connect Device
                </button>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 cursor-pointer rounded-full border py-1"
              >
                Save
              </button>
              <button
                type="button"
                className="flex-1 cursor-pointer rounded-full border py-1"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
