import { useEffect, useState } from "react";
import { useProductContext } from "../contexts/ProductProvider";
import { RiDeleteBin6Line } from "react-icons/ri";

export const CartProductsPage = () => {
  const { cartProducts, setCartProducts } = useProductContext();
  const [showedItem, setShowedItem] = useState(cartProducts[0]);

  useEffect(() => {
    setShowedItem(cartProducts[0]);
  }, [cartProducts]);

  return (
    <main className="flex justify-center items-strantch px-5 mt-12 max-w-screen-sm md:max-w-screen-xl md:mx-auto">
      {cartProducts.length ? (
        <>
          <section
            style={{ height: 40 + "rem" }}
            className=" overflow-hidden overflow-y-auto border w-2/5"
          >
            <div className="flex justify-center ">
              <img
                className="w-80 h-auto"
                src={showedItem.image}
                alt="cart-product"
              />
            </div>
            <div className="mt-5 p-5">
              <h2 className="rubik-font font-bold text-xl mb-4">
                {showedItem.title}
              </h2>
              <span className="p-2 rubik-font text-orange-600 text-xl border-orange-500 border">{`$ ${showedItem.price}`}</span>
              <p className="font-bold text-lg mt-4">Description: </p>
              <p className="text-lg mt-2">{showedItem.description}</p>
            </div>
          </section>

          <section className="border w-2/5">
            <h2 className="text-xl text-center font-bold mt-3">
              Retailers Carts
            </h2>
            <ul className="pt-3">
              {cartProducts.map((i) => (
                <li
                  className="p-3 border cursor-pointer hover:bg-orange-100 flex justify-between items-center transition-all duration-200 ease-in-out"
                  key={i.id}
                  onClick={() => setShowedItem(i)}
                >
                  <div>
                    <p>{i.title}</p>
                    <span>{`$ ${i.price}`}</span>
                    <p>{i.date}</p>
                  </div>
                  <button
                    onClick={() =>
                      setCartProducts(cartProducts.filter((c) => c !== i))
                    }
                    className="text-orange-500 hover:scale-110 transition-all duration-200 ease-in-out"
                  >
                    <RiDeleteBin6Line size={25} />
                  </button>
                </li>
              ))}
            </ul>
          </section>
        </>
      ) : (
        <div className="w-full h-96 flex justify-center items-center">
          <span className="rubik-font font-bold text-xl">
            The Cart Is Empty
          </span>
        </div>
      )}
    </main>
  );
};
