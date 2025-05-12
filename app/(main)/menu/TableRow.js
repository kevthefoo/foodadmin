import { MdEdit, MdDelete } from "react-icons/md";

export default function TableRow({ image, dishName, price, status }) {
  return (
    <tr className="border-b-2 border-black">
      <td className="px-6 py-6 text-center">{image}</td>
      <td className="px-6 py-6 text-center">{dishName}</td>
      <td className="px-6 py-6 text-center">{price}</td>
      <td className="px-6 py-6 text-center">{status}</td>
      <td className="flex h-full items-center justify-center gap-4 px-6 py-6 text-center">
        <MdEdit title="Edit" className="cursor-pointer" />

        <MdDelete title="Delete" className="cursor-pointer" />
      </td>
    </tr>
  );
}
