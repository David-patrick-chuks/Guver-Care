import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import React, { useState } from "react";
import { medbody, medication } from "../../data/db";

function Medical() {
  const [products, setProducts] = useState(medbody);

  return (
    <div className="w-full px-5 h-full ">
      <div >
        <p className="text-xl font-semibold">Test Results List </p>
        <p>Result report</p>
      </div>
      <div className=" mb-5 justify-center items-center flex w-full">
        <div className="  w-[80%]">
          <div className="card">
            <DataTable
              value={products}
              size="small"
              tableStyle={{ minWidth: "20rem" }}
            >
              <Column field="name" header="name"></Column>
              <Column field="date" header="date"></Column>
              <Column field="medoff" header="medoff"></Column>
              <Column field="stat" header="stat"></Column>
              <Column field="time" header="time"></Column>
            </DataTable>
          </div>
        </div>

        <div className="w-[20%] ">
          <img src="/pictures/chartSM.png" alt="" />
        </div>
      </div>

      <div className=" flex w-full">
        <div className="flex w-[40%]">
          <img src="/pictures/Card.png" alt="" /></div>
        <div className="flex w-[60%] justify-center items-center px-3 gap-4">
          <div className="flex flex-col w-1/2">
            <p className="mb-2 font-semibold">Medication</p>
            {
              medication.map((med, id) => (
                <div className="p-2 mb-2 flex flex-col gap-1 bg-gray-200 rounded-xl">
                  <p className="font-semibold">{med.med}</p>
                  <p className="text-xs">{med.description}</p>
                  <p className="text-xs">{med.refill}</p>
                </div>
              ))
            }
          </div>
          <div className="flex bg-gray-200 py-4 px-3 gap-2 flex-col w-1/2 rounded-xl">
            <p className="py-3 px-4 rounded-lg w-fit bg-nurse-300 text-white ">Moderate</p>
            <p className="font-bold ">Blood pressure</p>
            <p className="text-xs w-[80%]">
              A condition in which the cavities around the nasal passages become inflamed</p>
            <div className="flex justify-center items-center gap-3">
              <div className="w-1/2">
              <p className="font-semibold text-sm capitalize">
              primary doctor</p>
              <p className=" text-xs capitalize">Dr. Janwe</p>
              </div>
              <div className="w-1/2">
              <p className="font-semibold text-sm capitalize">Treament</p>
              <p className=" text-xs capitalize">Nasonex Aerosol Mometasone furate 50mcg/</p>
              </div>  </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Medical;
