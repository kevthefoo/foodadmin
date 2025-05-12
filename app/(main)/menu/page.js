export default function Menu() {
  return (
    <>
      <h1 className="mb-4 text-2xl">Menu</h1>
      <div className="flex h-full w-full items-center justify-start">
        <div className="flex h-[500px] w-8/12 flex-col rounded-t-xl border-2 border-black">
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

        {/* <div className="h-full border-2 border-amber-300 rounded-xl p-4">
                    <button className="block w-full   text-white font-semibold py-1 mb-4 rounded-full">
                        + Add Dish
                    </button>

                    <h2 className="text-xl font-semibold mb-2">Edit Dish</h2>

                    <form className="space-y-3">
                        <div>
                            <label className="block text-sm mb-1">
                                Dish Name
                            </label>
                            <input
                                type="text"
                                className="w-full border   rounded px-2 py-1"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">
                                Description
                            </label>
                            <input
                                type="text"
                                className="w-full border   rounded px-2 py-1"
                            />
                        </div>
                        <div className="flex gap-2">
                            <div className="flex-1">
                                <label className="block text-sm mb-1">
                                    Price
                                </label>
                                <input
                                    type="text"
                                    className="w-full border  rounded px-2 py-1"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block text-sm mb-1">
                                    Ingredients
                                </label>
                                <input
                                    type="text"
                                    className="w-full border  rounded px-2 py-1"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm mb-1">
                                Nutritional info
                            </label>
                            <input
                                type="text"
                                className="w-full border  rounded px-2 py-1"
                            />
                        </div>
                        <div>
                            <label className="block text-sm mb-1">
                                Allergen Icons
                            </label>
                            <div className="flex gap-2 mt-1">
                                <div className="w-8 h-8 rounded-full "></div>
                                <div className="w-8 h-8 rounded-full "></div>
                                <div className="w-8 h-8 rounded-full "></div>
                                <div className="w-8 h-8 rounded-full "></div>
                                <div className="w-8 h-8 rounded-full "></div>
                                <div className="w-8 h-8 rounded-full "></div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm mb-1">
                                3D Model
                            </label>
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    placeholder="File name"
                                    className="flex-1 border  rounded px-2 py-1 "
                                />
                                <button
                                    type="button"
                                    className=" text-white rounded-full px-4"
                                >
                                    Connect Device
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-4 pt-4">
                            <button
                                type="submit"
                                className="flex-1 border  rounded-full py-1"
                            >
                                Save
                            </button>
                            <button
                                type="button"
                                className="flex-1  text-white rounded-full py-1"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div> */}
      </div>
    </>
  );
}
