import { Link } from "react-router-dom";
import { IoChevronBackCircleOutline } from "react-icons/io5";

export default function (props) {
  return (
    <div
      id="header"
      className="w-full px-4 py-3 shadow-md bg-white flex gap-x-3 items-center"
    >
      <Link to={"/"}>
        <IoChevronBackCircleOutline className=" text-4xl text-primary " />
      </Link>
      <span className=" text-xl">{props.text}</span>
    </div>
  );
}
