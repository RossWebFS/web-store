import { ProductFilter } from "../components/ProductFilter";
import { ProductsList } from "../components/ProductsList";

export const HomePageProducts = () => {
  return (
    <main className="px-5 mt-12 max-w-screen-sm md:max-w-screen-xl md:mx-auto">

      <section className="relative my-5 flex gap-x-5">
        <ProductFilter />
        <ProductsList />
      </section>
    </main>
  );
};
