"use client";
import React from "react";
import AnimateCounter from "./AnimateCounter";
import DoughnutChart from "../DoughnutChart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughnutChart accounts={accounts} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="header-2"> Banks Accounts: {totalBanks}</div>
      </div>
      <div className="flex flex-col gap-4">
        <p className="total-balance-label">Total Current Balance:</p>
        <div className="total-balance-amount flex-center gap-2">
          <AnimateCounter amount={totalCurrentBalance} />
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
