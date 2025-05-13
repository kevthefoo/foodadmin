import Image from "next/image";

import { MdEdit, MdDelete } from "react-icons/md";
export default function TableRow({
  imageSrc,
  dishName,
  price,
  status,
  onDelete,
}) {
  return (
    <>
      <tr className="border-b-2 border-black">
        <td className="flex items-center justify-center px-6 py-6 text-center">
          <Image
            src={imageSrc}
            alt="Dish Image"
            width={50}
            height={50}
            className="rounded-xl"
          />
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

          <MdDelete
            title="Delete"
            className="inline-block cursor-pointer"
            onClick={onDelete}
          />
        </td>
      </tr>
    </>
  );
}
