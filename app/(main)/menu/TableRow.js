import { MdEdit, MdDelete } from "react-icons/md";

export default function TableRow({ image, dishName, price, status }) {
  return (
    <tr className="border-b-2 border-black">
      <td className="flex items-center justify-center px-6 py-6 text-center">
        <div className="select-none">{image}</div>
      </td>
      <td className="px-6 py-6 text-center">{dishName}</td>
      <td className="px-6 py-6 text-center">{price}</td>
      <td className="px-6 py-6 text-center">
        {status ? (
          <p className="text-green-600">Active</p>
        ) : (
          <p className="text-red-600">Disabled</p>
        )}
      </td>
      <td className="items-center justify-center px-6 py-6 text-center">
        <MdEdit title="Edit" className="mr-2 inline-block cursor-pointer" />

        <MdDelete title="Delete" className="inline-block cursor-pointer" />
      </td>
    </tr>
  );
}
