import GroceriesList from "@/component/GroceriesList";
import { groceries } from "@/resources/groceries";
import { useState, useEffect } from "react";
import React from "react";

export default function HomePage() {
  return <GroceriesList />;
}
