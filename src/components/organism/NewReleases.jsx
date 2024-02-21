import CardProducts from "../molecul/CardProducts";
import ProductsList from "../../constant/ProductsList";

export default function NewReleases() {
  return (
    <>
      {/* section Kopi Signature  */}
      <section className="mt-3">
        <h1 className="text-3xl font-bold">New Releases</h1>
        <div className="flex justify-center  gap-x-6">
          <CardProducts data={ProductsList} />
        </div>
      </section>
      {/* end section new releases */}
    </>
  );
}
