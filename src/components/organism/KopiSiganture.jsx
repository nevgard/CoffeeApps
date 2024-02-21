import CardProducts from "../molecul/CardProducts";
import ProductsList from "../../constant/ProductsList";

export default function KopiSiganture() {
  return (
    <>
      {/* section Kopi Signature  */}
      <section id="Kopi Signature" className="mt-3">
        <h1 className="text-3xl font-bold">Kopi Signature</h1>
        <div className="flex justify-center  gap-x-6">
          <CardProducts
            data={ProductsList.filter(
              (product) => product.category === "Kopi Signature"
            )}
          />
        </div>
      </section>
      {/* end section new releases */}
    </>
  );
}
