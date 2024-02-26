import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/UI/Base/SelectSingleBase";
import { TDeps, TFuncs, TLocs } from "@/typings/api";
import useFilterContext from "@/context/FilterContext";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { UrlParamsOnly } from "@/lib/utils";

type SelectSingleProps = {
  options: TDeps[] | TFuncs[] | TLocs[];
  placeholder: string;
  type: "deps" | "locs" | "funcs";
};
const SelectSingle = ({ options, placeholder, type }: SelectSingleProps) => {
  const searchParams = useSearchParams();
  const depsParam = searchParams.get("dept");
  const locsParam = searchParams.get("loc");
  const funcsParam = searchParams.get("fun");
  const searchKey = searchParams.get("q");
  useEffect(() => {
    setUrlParamsFromTags();
  }, [searchParams]);

  const router = useRouter();
  const [activeValue, setActiveValue] = useState<string | null>(() => {
    // Compute initial value based on switch case
    switch (type) {
      case "deps":
        return depsParam || "";
      case "funcs":
        return funcsParam || "";
      case "locs":
        return locsParam || "";
    }
  });

  const setUrlParamsFromTags = () => {
    switch (type) {
      case "deps":
        !depsParam && setActiveValue("");
        break;
      case "locs":
        !locsParam && setActiveValue("");
        break;
      case "funcs":
        !funcsParam && setActiveValue("");
        break;
    }
  };
  const setUrlParams = (value: string) => {
    setActiveValue(value);
    const { queryString } = UrlParamsOnly();
    const urlParams = new URLSearchParams(queryString);
    switch (type) {
      case "deps":
        if (value) {
          urlParams.set("dept", value);
        } else {
          urlParams.delete("dept");
        }
        break;
      case "locs":
        if (value) {
          urlParams.set("loc", value);
        } else {
          urlParams.delete("loc");
        }
        break;
      case "funcs":
        if (value) {
          urlParams.set("fun", value);
        } else {
          urlParams.delete("fun");
        }
        break;
    }
    const newUrlParams = urlParams.toString();
    const newUrl = newUrlParams ? `?${newUrlParams}` : "";
    router?.replace(newUrl);
  };
  return (
    <Select
      value={activeValue as string}
      onValueChange={(value: string) => setUrlParams(value)}
    >
      <SelectTrigger className="SelectTrigger w-full bg-white">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="bg-white">
        <SelectGroup>
          {options?.map((option, index) => (
            <SelectItem
              key={`filter-option-${index}`}
              className="cursor-pointer p-4 border-b md:hover:bg-slate-200 md:transition-all"
              value={String(option?.id)}
            >
              {option?.title}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SelectSingle;
