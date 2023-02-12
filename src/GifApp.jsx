import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {
  const [Categories, setCategories] = useState(["value"]);

  return (
    <>
      <h1>GIFS</h1>
      <AddCategory  />
    </>
  );
};
