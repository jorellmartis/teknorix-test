"use client";
import { InputBase } from "@/components/UI/Base/InputBase";
import useFilterContext from "@/context/FilterContext";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

type InputProps = {
  onChange: (arg0: any) => void;
};
const Input = ({ onChange }: InputProps) => {
  const { searchKeyword } = useFilterContext();
  return (
    <div className="relative">
      <InputBase
        value={searchKeyword}
        onChange={onChange}
        className="bg-white p-5"
        type="text"
        placeholder="Search For Job"
      />
      <MagnifyingGlassIcon
        // onClick={onChange}
        className="absolute right-3 top-1/2 -translate-y-1/2 h-7 w-5 cursor-pointer"
        color="green"
      />
    </div>
  );
};

export default Input;
