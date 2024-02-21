import CardProducts from "../molecul/CardProducts";
import ProductsList from "../../constant/ProductsList";

export default function NonCoffee() {
  return (
    <>
      {/* section Kopi Signature  */}
      <section id="Non-Coffee" className="mt-3">
        <h1 className="text-3xl font-bold">Non Coffee</h1>
        <div className="flex justify-center  gap-x-6">
          <CardProducts
            data={ProductsList.filter(
              (product) => product.category === "Non-Coffee"
            )}
          />
        </div>
      </section>
      {/* end section new releases */}
    </>
  );
}
