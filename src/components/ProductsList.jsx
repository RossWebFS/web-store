import { ProductCard } from "./ProductCard";
import { useProductContext } from "../contexts/ProductProvider";

export const ProductsList = () => {
  const {
    productsData,
    selectedFilter,
    setSelectedFilter,
    cartProducts,
    setCartProducts,
  } = useProductContext();

  window.data = productsData;
  return (
    <section className="w-3/4">
      <p>
        Showing <span className="orbitron-font">{productsData.length}</span>{" "}
        results from total{" "}
        <span className="orbitron-font">
          {JSON.parse(localStorage.getItem("productsData"))?.length || 0}
        </span>{" "}
        {selectedFilter.length ? "for " : ""}
        <span className="font-semibold">{selectedFilter.join(" and ")}</span>
      </p>
      <div className="mt-3 mb-5 flex items-center">
        <p>Applied Filters:</p>
        <ul className="flex">
          {selectedFilter.map((i) => {
            return (
              <li
                className={`${
                  !selectedFilter.length && "hidden"
                } mx-2 px-3 py-1.5 rounded-full shadow-md`}
              >
                <span>{i}</span>
                <i
                  className="pl-1 cursor-pointer hover:text-orange-500 transition-all ease-in-out duration-200"
                  onClick={() =>
                    setSelectedFilter(selectedFilter.filter((c) => c !== i))
                  }
                >
                  &times;
                </i>
              </li>
            );
          })}
        </ul>
      </div>

      <ul className="flex gap-10 flex-wrap">
        {productsData.map((i) => (
          <ProductCard
            key={i.id}
            productItem={i}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
        ))}
      </ul>
    </section>
  );
};
