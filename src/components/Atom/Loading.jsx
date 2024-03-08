import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="flex items-center space-x-2 text-primary">
        <AiOutlineLoading3Quarters className="animate-spin text-4xl" />
        <span className="font-semibold text-xl">Loading...</span>
      </div>
    </div>
  );
}
