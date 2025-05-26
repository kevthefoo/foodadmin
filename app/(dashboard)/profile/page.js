"use client";
import { useState } from "react";

export default function Profile() {
  const [form, setForm] = useState({
    restaurantName: "Dine Dine Sushi",
    phone: "0498745896",
    address: "75 Main Street, Melbourne, VIC 3000",
  });

  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEdit = () => {
    console.log("Edit button clicked");
    setEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  return (
    <>
      <h1 className="mb-4 text-2xl select-none">Profile</h1>
      <div className="flex h-full w-full flex-col items-center justify-center gap-6">
        <form
          className="flex w-80 flex-col gap-4 rounded bg-white p-6 shadow"
          onSubmit={handleSave}
        >
          <label className="flex flex-col">
            <span className="mb-1">Restaurant Name</span>
            <input
              type="text"
              name="restaurantName"
              value={form.restaurantName}
              onChange={handleChange}
              disabled={!editing}
              className={`rounded border px-2 py-1 ${!editing ? "bg-opacity-70 bg-gray-300" : "bg-white"}`}
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-1">Phone</span>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              disabled={!editing}
              className={`rounded border px-2 py-1 ${!editing ? "bg-opacity-70 bg-gray-300" : "bg-white"}`}
              required
            />
          </label>
          <label className="flex flex-col">
            <span className="mb-1">Address</span>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              disabled={!editing}
              className={`rounded border px-2 py-1 ${!editing ? "bg-opacity-70 bg-gray-300" : "bg-white"}`}
              required
            />
          </label>
        </form>
        {editing ? (
          <button
            type="submit"
            onClick={handleSave}
            className="mt-2 cursor-pointer rounded bg-blue-600 px-4 py-2 text-white"
          >
            Save
          </button>
        ) : (
          <button
            type="button"
            onClick={handleEdit}
            className="mt-2 cursor-pointer rounded bg-gray-600 px-4 py-2 text-white"
          >
            Edit
          </button>
        )}
      </div>
    </>
  );
}
