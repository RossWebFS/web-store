import { useEffect, useState } from "react";

const useFetchProducts = (url) => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("failed to fetch products");
        return res.json();
      })
      .then((data) => {
        localStorage.setItem("productsData", JSON.stringify(data))
        setProductsData(JSON.parse(localStorage.getItem("productsData") || "[]"));
      })
      .catch((err) => console.log(err));
  }, []);
  return [productsData, setProductsData];
};
export default useFetchProducts;
