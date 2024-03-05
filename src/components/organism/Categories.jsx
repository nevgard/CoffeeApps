import ButtonCategories from "../Atom/ButtonCategories";
import ProductsList from "../../constant/ProductsList";

export default function Categories() {
  return (
    <div className="z-10 bg-white pb-10  w-full text-center flex overflow-x-hidden gap-x-6 justify-center items-center sticky top-0 ">
      <ButtonCategories data={ProductsList} />
    </div>
  );
}
