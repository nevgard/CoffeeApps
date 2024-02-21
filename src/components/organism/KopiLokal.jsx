import CardProducts from "../molecul/CardProducts";
import ProductsList from "../../constant/ProductsList";

export default function KopiLokal() {
  return (
    <>
      {/* section Kopi Signature  */}
      <section id="Kopi Lokal" className=" mt-3">
        <h1 className="text-3xl font-bold">Kopi Lokal</h1>
        <div className="flex justify-center  gap-x-6">
          <CardProducts
            data={ProductsList.filter(
              (product) => product.category === "Kopi Lokal"
            )}
          />
        </div>
      </section>
      {/* end section new releases */}
    </>
  );
}
