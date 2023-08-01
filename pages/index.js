import GroceriesList from "@/component/GroceriesList";
import { groceries } from "@/resources/groceries";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [daysRemaining, setDaysRemaining] = useState(null);

  useEffect(() => {
    const calculateDaysRemaining = () => {
      const boughtDate = new Date(groceries.purchasedDate);
      const expireDate = new Date(groceries.expirationDate);
      const timeDifference = Math.abs(expireDate - boughtDate);
      const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
      setDaysRemaining(daysRemaining);
    };
    calculateDaysRemaining();
  }, []);
  return <GroceriesList />;
}
