import { Accordion } from "./Accordion";
import { Checkbox } from "./Checkbox";
import { RangeInp } from "./RangeInp";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { useProductContext } from "../contexts/ProductProvider";

export const ProductFilter = () => {
  const [openedMainAccordion, setOpenedMainAccordion] = useState(true);
  const [openedFilterAccordion, setOpenedFilterAccordion] = useState(false);

  const { productsData, setProductsData, selectedFilter, setSelectedFilter } =
    useProductContext();

  window.selected = selectedFilter;

  useEffect(() => {
    setSelectedFilter(JSON.parse(localStorage.getItem("filteredProducts")) || "[]")
  } , [])

  useEffect(() => {
    filterProducts(selectedFilter);
    localStorage.setItem("filteredProducts", JSON.stringify(selectedFilter))
  }, [selectedFilter]);

  const filterProducts = (category) => {
    if (category.length && productsData) {
      setProductsData([
        ...JSON.parse(localStorage.getItem("productsData")).filter(
          (i) =>
            category.filter((c) => c === i.category).length === category.length
        ),
      ]);
    } else {
      setProductsData(
        JSON.parse(localStorage.getItem("productsData"))
          ? [...JSON.parse(localStorage.getItem("productsData"))]
          : []
      );
    }
  };

  return (
    <section
      style={{ height: 28 + "rem" }}
      className="w-1/2 lg:w-1/4 shadow-lg shadow-gray-300 p-3 rounded-lg"
    >
      <div>
        <div
          onClick={() => setOpenedMainAccordion(!openedMainAccordion)}
          className={`rounded ${
            openedMainAccordion && "bg-orange-300"
          } p-1.5 flex justify-between items-center transition-all duration-200 ease-in-out`}
        >
          <span>Categories</span>
          <IoIosArrowDown
            className={`${
              !openedMainAccordion && "-rotate-90"
            } transition-all ease-in-out`}
          />
        </div>

        <div
          className={`${
            openedMainAccordion ? "h-96" : "h-0"
          } transition-all duration-300 ease-in-out overflow-hidden`}
        >
          <Accordion
            isOpened={openedFilterAccordion}
            setIsOpened={setOpenedFilterAccordion}
            title="Women"
          >
            <ul className="pl-3">
              <li className="my-4">
                <Checkbox filterTitle="women's clothing" />
                <label htmlFor="wome's clothing">Clothing</label>
              </li>
              <li className="my-4">
                <Checkbox filterTitle="jewelery" />
                <label htmlFor="jewelery-checkbox">Jewelery</label>
              </li>

              <li className="mt-12">
                <RangeInp />
              </li>
            </ul>
          </Accordion>
          <Accordion
            isOpened={!openedFilterAccordion}
            setIsOpened={setOpenedFilterAccordion}
            title="Men"
          >
            <ul className="pl-3">
              <li className="my-4">
                <Checkbox filterTitle="men's clothing" />
                <label htmlFor="men's clothing">Clothing</label>
              </li>
              <li className="my-4">
                <Checkbox filterTitle="electronics" />
                <label htmlFor="electronics">Electronics</label>
              </li>

              <li className="mt-12">
                <RangeInp />
              </li>
            </ul>
          </Accordion>
        </div>
      </div>
    </section>
  );
};
