"use client";

export default function Dashboard() {
  return (
    <>
      <h1 className="mb-4 text-2xl select-none">Stat</h1>
      <div className="grid h-full w-full grid-cols-4 select-none">
        <div className="flex aspect-square w-2/3 flex-col items-center justify-center rounded-xl border-2 border-black bg-[#EBE3D3]">
          <p>Dishes</p>
          <p>10</p>
        </div>
        <div className="flex aspect-square w-2/3 flex-col items-center justify-center rounded-xl border-2 border-black bg-[#EBE3D3]">
          <p>Pending Updates</p>
          <p>3</p>
        </div>
        <div className="flex aspect-square w-2/3 flex-col items-center justify-center rounded-xl border-2 border-black bg-[#EBE3D3]">
          <p>Recent Activity Log</p>
          <p>10</p>
        </div>
        <div className="flex aspect-square w-2/3 flex-col items-center justify-center rounded-xl border-2 border-black bg-[#EBE3D3]">
          <p>Sales</p>
          <p>1078</p>
        </div>
        <div className="flex aspect-square w-2/3 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-black bg-[#EBE3D3]">
          <p className="text-9xl">+</p>
        </div>
      </div>
    </>
  );
}
