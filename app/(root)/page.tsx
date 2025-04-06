import TotalBalanceBox from "@/components/TotalBalanceBox";
import HeaderBox from "@/components/ui/headerBox";
import React from "react";

const Home = () => {
  const loggedIn = { firstName: "John", lastName: "Doe" }; // Example logged-in user object
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your acounts, cards, and transactions all in one place."
          />
          <TotalBalanceBox
            account={[]}
            totalBank={1}
            totoCurrentBalance={1250.35}
          />
        </header>
      </div>
    </section>
  );
};

export default Home;
