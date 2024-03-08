import CardProducts from "../molecul/CardProducts";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slice/productsSlice";
import { useEffect } from "react";
export default function NonCoffee() {
  const product = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);
  return (
    <>
      {/* section Kopi Signature  */}
      <section id="Non-Coffee" className="mt-3">
        <h1 className="text-3xl font-bold">Non Coffee</h1>
        <div className="flex justify-center  gap-x-6">
          <CardProducts
            data={product.products.filter(
              (product) => product.category === "Non-Coffee"
            )}
          />
        </div>
      </section>
      {/* end section new releases */}
    </>
  );
}
