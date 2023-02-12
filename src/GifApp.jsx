import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifApp = () => {
  const [Categories, setCategories] = useState(["value"]);


  return (
    <>

      <AddCategory />

      {/* {
        Categories.map((category) => (

          <li key={category}> {category}</li>

        ))
      } */}


    </>


  );
};
