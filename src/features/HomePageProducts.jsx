import { useState } from "react";
import { ProductFilter } from "../components/ProductFilter";
import { ProductsList } from "../components/ProductsList";
import { SinglePage } from "../components/SinglePage";

export const HomePageProducts = () => {
  const [isActiveModal, setIsActiveModal] = useState({
    image: "",
    title: "",
    price: 0,
    description: "",
    id: new Date(),
    isActive: false
  })

  return (
    <>
        {isActiveModal.isActive && <SinglePage isActiveModal={isActiveModal} setIsActiveModal={setIsActiveModal}/>}
      <main className="px-5 mt-12 max-w-screen-sm md:max-w-screen-xl md:mx-auto">
        <section className="relative my-5 flex gap-x-5">
          <ProductFilter />
          <ProductsList isActiveModal={isActiveModal} setIsActiveModal={setIsActiveModal}/>
        </section>
      </main>
    </>
  );
};
