"use client";

import { Slider } from "primereact/slider";
import { useState } from "react";

export default function MortgageCalculator() {
  const [value, setValue] = useState(0);

  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-2 p-10 bg-teal-100">
        <div className="bg-white grid gap-4">
          <div className="text-4xl leading-10 font-semibold">
            Try our awesome Calculator
          </div>
          <div className="text-xl text-gray-500">
            Adjust the purchase price, down payment, and interest rate to fit
            your budget.
          </div>
          <div>
            <button className="px-14 py-2 rounded-full btn-primary">
              Register
            </button>
          </div>
        </div>
      </div>

      <div className="col-span-3 p-10 bg-teal-100">
        <div className="bg-gray-300 text-white grid gap-8">
          <div className="grid gap-4">
            <span className="text-4xl leading-10 font-semibold">
              Mortgage Calculator
            </span>
            <span className="text-xl">
              Take control with a plan set in stone.
            </span>
          </div>
          <div>
            <Slider value={value} onChange={(e: any) => setValue(e.value)} />
          </div>
        </div>
      </div>
    </div>
  );
}
