import { useProductContext } from "../contexts/ProductProvider";
import { NavLogo } from "./NavLogo";

export const SinglePage = ({ isActiveModal, setIsActiveModal }) => {
  const {cartProducts, setCartProducts} = useProductContext()
  return (
    <div className="bg-black/25 fixed top-0 w-full h-full z-20 flex justify-center items-center">
      <section className="p-2 rounded bg-white/100 w-3/5 absolute z-30">
        <nav className="flex items-center justify-between mb-3">
          <NavLogo />
          <button
            onClick={() =>
              setIsActiveModal({ ...isActiveModal, isActive: false })
            }
            className="pr-2 text-xl hover:text-orange-500 transition-colors duration-200 ease-in-out"
          >
            &times;
          </button>
        </nav>
        <div className="flex gap-6">
          <div>
            <img
              className="w-80 h-auto"
              src={isActiveModal.image}
              alt="procuctItem"
            />
          </div>
          <div className="flex flex-col items-start">
            <div>
              <h2 className="text-2xl font-bold mt-0 mb-8">
                {isActiveModal.title}
              </h2>
              <span className="p-2 rubik-font text-orange-600 text-xl border-orange-500 border">
                {`$ ${isActiveModal.price}`}
              </span>
              <p className="mt-5">{isActiveModal.description}</p>
            </div>
            <div>
              {cartProducts &&
              cartProducts.find((i) => i.id === isActiveModal.id) ? (
                <button
                  className="bg-blue-500 default-btn rubik-font tracking-wide hover:bg-blue-600"
                  onClick={() => {
                    setCartProducts([
                      ...cartProducts.filter((i) => i.id !== isActiveModal.id),
                    ]);
                  }}
                >
                  Delete from Card
                </button>
              ) : (
                <button
                  className="default-btn hover:bg-blue-500 bg-orange-500 rubik-font tracking-wide"
                  onClick={() => {
                    setCartProducts(
                      cartProducts
                        ? [...cartProducts, isActiveModal]
                        : [isActiveModal]
                    );
                  }}
                >
                  Add to Card
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
