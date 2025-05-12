export default function Menu() {
  return (
    <>
      <h1 className="mb-4 text-2xl">Menu</h1>
      <div className="flex h-full w-full items-center justify-start border-8 border-blue-500">
        <table className="h-full w-8/12 border-separate rounded-xl border-8 border-amber-300 text-left">
          <thead>
            <tr>
              <th className="px-6 py-4">Thumbnail</th>
              <th className="px-6 py-4">Dish Name</th>
              <th className="px-6 py-4">Price</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Details</th>
            </tr>
          </thead>

          <tbody className="">
            <tr className="border-2 border-black">
              <td className="px-6 py-6">
                <div className="flex h-16 w-16 items-center justify-center rounded border border-dashed text-sm">
                  Image
                </div>
              </td>
              <td className="px-6 py-6">Dish Name</td>
              <td className="px-6 py-6">$xx.xx</td>
              <td className="px-6 py-6">
                <span className="inline-block rounded-full px-4 py-1 text-sm">
                  Active
                </span>
              </td>
              <td className="px-6 py-6">
                <button className="rounded-full px-5 py-1 text-sm">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>

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
