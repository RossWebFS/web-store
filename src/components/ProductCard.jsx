import { useProductContext } from "../contexts/ProductProvider";
import { CiHeart } from "react-icons/ci";
export const ProductCard = ({ productItem }) => {
  const { cartProducts, setCartProducts } =
    useProductContext();

  return (
    <li className="flex flex-col items-stretch rounded-lg shadow-lg border border-gray-300">
      <img
        className="rounded-t-lg text-l product-card-size object-cover"
        src={productItem.image}
        alt={productItem.title}
      />

      <div
        className="flex flex-col h-full justify-between p-4 rounded-b-lg"
      >
        <h5 className="product-title my-2 text-lg montserrat-font font-bold tracking-wide">
          {productItem.title}
        </h5>
        <div className="flex flex-col ">
          <span className="text-sm rubik-font font-medium tracking-wide">
            {`$ ${productItem.price}`}
          </span>
          <div className="my-5">
            <button className="outlined-btn">S</button>
            <button className="outlined-btn">M</button>
            <button className="outlined-btn">L</button>
            <button className="outlined-btn">XL</button>
          </div>
          <div className="mt-2 flex justify-between items-center">
            {cartProducts && cartProducts.find((i) => i.id == productItem.id) ? (
              <button
                className="bg-blue-500 default-btn rubik-font tracking-wide hover:bg-blue-600"
                onClick={() => {
                  const date = new Date();
                  productItem.date = `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
                  setCartProducts([
                    ...cartProducts.filter((i) => i.id !== productItem.id),
                  ]);
                }}
              >
                Delete from Card
              </button>
            ) : (
              <button
                className="default-btn hover:bg-blue-500 bg-orange-500 rubik-font tracking-wide"
                onClick={() => {
                  setCartProducts(cartProducts ? [...cartProducts, productItem] : [productItem]);
                }}
              >
                Add to Card
              </button>
            )}
            <button className="bg-orange-500 rounded-full p-1 cursor-pointer hover:bg-gray-400 transition-all duration-200 ease-in-out focus:outline-none">
              <CiHeart size={26} color="white" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};
