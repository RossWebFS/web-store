import { Accordion } from "./Accordion";
import { RangeInp } from "./RangeInp";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { useProductContext } from "../contexts/ProductProvider";

export const ProductFilter = () => {
  const [openedMainAccordion, setOpenedMainAccordion] = useState(true);
  const [openedFilterAccordion, setOpenedFilterAccordion] = useState(false);

  const { setProductsData, selectedFilter, setSelectedFilter } =
    useProductContext();

  useEffect(() => {
    filterProducts(selectedFilter);
  }, [selectedFilter]);

  const filterProducts = (category) => {
    if (category.length > 0) {
        setProductsData([
          ...JSON.parse(localStorage.getItem("productsData")).filter((i) =>
            i.category == category
          ),
        ]);
    } else {
      setProductsData([
        ...JSON.parse(localStorage.getItem("productsData"))
    ])}
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
                <input
                  className="mr-2 custom-checkbox"
                  type="checkbox"
                  onChange={(event) => {
                    event.target.checked
                      ? setSelectedFilter([...selectedFilter, "women's clothing"])
                      : setSelectedFilter(
                          selectedFilter.filter((i) => i !== "women's clothing")
                        );
                  }}
                  checked={selectedFilter.find(c => c === "women's clothing")}
                />
                <label htmlFor="">Clothing</label>
              </li>
              <li className="my-4">
                <input
                  className="mr-2 custom-checkbox"
                  id="jewelery-checkbox"
                  type="checkbox"
                  onChange={(event) => {
                    event.target.checked
                      ? setSelectedFilter([...selectedFilter, "jewelery"])
                      : setSelectedFilter(
                          selectedFilter.filter((i) => i !== "jewelery")
                        );
                  }}
                  checked={selectedFilter.find(c => c === "jewelery")}
                />
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
                <input
                  className="mr-2 custom-checkbox"
                  type="checkbox"
                  onChange={(event) => {
                    event.target.checked
                      ? setSelectedFilter([...selectedFilter, "men's clothing"])
                      : setSelectedFilter(
                          selectedFilter.filter((i) => i !== "men's clothing")
                        );
                  }}
                  checked={selectedFilter.find(c => c === "men's clothing")}
                />
                <label htmlFor="">Clothing</label>
              </li>
              <li className="my-4">
                <input
                  className="mr-2 custom-checkbox"
                  type="checkbox"
                  onChange={(event) => {
                    event.target.checked
                      ? setSelectedFilter([...selectedFilter, "electronics"])
                      : setSelectedFilter(
                          selectedFilter.filter((i) => i !== "electronics")
                        );
                  }}
                  checked={selectedFilter.find(c => c === "electronics")}
                />
                <label htmlFor="">Electronics</label>
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
