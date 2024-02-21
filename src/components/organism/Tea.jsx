import CardProducts from "../molecul/CardProducts";
import ProductsList from "../../constant/ProductsList";

export default function Tea() {
  return (
    <>
      {/* section Kopi Signature  */}
      <section id="Tea" className="mt-3">
        <h1 className="text-3xl font-bold"> Tea</h1>
        <div className="flex justify-center  gap-x-6">
          <CardProducts
            data={ProductsList.filter((product) => product.category === "Tea")}
          />
        </div>
      </section>
      {/* end section new releases */}
    </>
  );
}
