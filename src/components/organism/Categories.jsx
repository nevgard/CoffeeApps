import ButtonCategories from "../Atom/ButtonCategories";
import ProductsList from "../../constant/ProductsList";

export default function Categories() {
  return (
    <div className=" text-center flex overflow-x-hidden gap-x-6 justify-center items-center ">
      <ButtonCategories data={ProductsList} />
    </div>
  );
}
