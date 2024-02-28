"use client";
import toCurrency from "@/app/utils/currency";
import { Slider } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function MortgageCalculator() {
  const [purchasePrice, setPurchasePrice] = useState(450000);
  const [downPayment, setDownPayment] = useState(135000);
  const [repaymentTime, setRepaymentTime] = useState(25);
  const [interestRate, setInterestRate] = useState(3);
  const [loanAmount, setLoanAmount] = useState(0);
  const [monthlyRepayment, setMonthlyRepayment] = useState(0);

  useEffect(() => {
    const [loanPrice, r, n] = [
      purchasePrice - downPayment,
      interestRate / 12 / 100,
      repaymentTime * 12,
    ];
    const monthlyMortgagePayment =
      (loanPrice * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);
    setLoanAmount(loanPrice);
    setMonthlyRepayment(monthlyMortgagePayment || 0);
  }, [purchasePrice, downPayment, repaymentTime, interestRate]);

  return (
    <div className="grid grid-cols-5 gap-4">
      <div className="col-span-2 p-10">
        <div className="grid gap-4">
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

      <div className="col-span-3 p-10 bg-primary-500">
        <div className="text-white grid gap-8">
          <div className="grid gap-4">
            <span className="text-4xl leading-10 font-semibold">
              Mortgage Calculator
            </span>
            <span className="text-xl">
              Take control with a plan set in stone.
            </span>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <Slider
              color={"foreground"}
              label="Purchase Price"
              step={5000}
              maxValue={1000000}
              minValue={5000}
              defaultValue={450000}
              value={purchasePrice}
              formatOptions={{
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }}
              className="max-w-md"
              onChange={(value: any) => setPurchasePrice(value)}
            />
            <Slider
              color={"foreground"}
              label="Down Payment"
              step={5000}
              maxValue={1000000}
              minValue={0}
              defaultValue={135000}
              value={downPayment}
              formatOptions={{
                style: "currency",
                currency: "USD",
                maximumFractionDigits: 0,
              }}
              className="max-w-md"
              onChange={(value: any) => setDownPayment(value)}
            />
            <Slider
              color={"foreground"}
              label="Repayment Time"
              step={1}
              maxValue={80}
              minValue={1}
              value={repaymentTime}
              classNames={{
                base: "max-w-md",
                value: "after:content-['year(s)'] after:ml-1",
              }}
              onChange={(value: any) => setRepaymentTime(value)}
            />
            <Slider
              color={"foreground"}
              label="Interest Rate"
              step={0.1}
              maxValue={20}
              minValue={0}
              value={interestRate}
              classNames={{
                base: "max-w-md",
                value: "after:content-['%']",
              }}
              onChange={(value: any) => setInterestRate(value)}
            ></Slider>
          </div>

          <div className="grid gap-4">
            <div className="flex gap-1 items-end">
              <span>Loan amount: </span>
              <span className="flex gap-[0.125rem] text-xl text-black font-semibold">
                {toCurrency(loanAmount)}
              </span>
            </div>
            <div className="flex gap-1 items-end">
              <span>Estimated repayment per month: </span>
              <span className="flex gap-[0.125rem] text-xl text-black font-semibold">
                {toCurrency(monthlyRepayment, 2)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
