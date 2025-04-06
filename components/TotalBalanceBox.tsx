"use client";
import React from "react";
import AnimateCounter from "./ui/AnimateCounter";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">{/* Doughnut Chart */}</div>
      <div className="flex flex-col gap-4">
        <div className="header-2"> Banks Accounts: {totalBanks}</div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="header-2"> Current Balance:</p>
        <p className="total-balance-amount flex-center gap-2">
          <AnimateCounter amount={totalCurrentBalance} />
        </p>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
