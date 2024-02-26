import { TDeps, TFuncs, TLocs } from "@/typings/api";
import Input from "../UI/Input";
import SelectSingle from "../UI/SelectSingle";
import Tags from "../UI/Tags";
import { ChangeEvent, useEffect, useState } from "react";
import { getDeps, getFuncs, getLocations } from "@/api/modules";
import { UrlParamsOnly, debounce } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import useFilterContext from "@/context/FilterContext";
import FiltersTag from "./FiltersTag";

const FiltersAll = () => {
  //states
  const router = useRouter();
  const {} = useFilterContext();
  const {
    setFilterDepData,
    setFilterLocData,
    setSearchKeyword,
    setFilterFuncData,
  } = useFilterContext();
  const [depData, setDepData] = useState<TDeps[]>([]);
  const [locData, setLocData] = useState<TLocs[]>([]);
  const [funcData, setFuncData] = useState<TFuncs[]>([]);
  const searchParamsPage = useSearchParams();
  const getDepsData = async () => {
    const data: TDeps[] = await getDeps();
    setDepData(data);
    setFilterDepData(data);
  };
  const getLocsData = async () => {
    const data: TLocs[] = await getLocations();
    setLocData(data);
    setFilterLocData(data);
  };
  const getFuncsData = async () => {
    const data: TFuncs[] = await getFuncs();
    setFuncData(data);
    setFilterFuncData(data);
  };
  const debouncedSearch = debounce((value: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("q", value);
    const newParams = searchParams.toString();
    const newUrl = newParams ? `?${newParams}` : "";
    window.history.replaceState(null, "", newUrl);
  }, 300);
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchKeyword(value);
    debouncedSearch(value);
  };
  const clearQueryParams = () => {
    setSearchKeyword("");
    router.replace(`/jobs/`);
  };

  useEffect(() => {
    getDepsData();
    getFuncsData();
    getLocsData();
  }, []);
  return (
    <div className="flex flex-col gap-6">
      <div className="p-5 md:px-8 md:py-8 mx-4 md:mx-8 bg-primary-light flex flex-col gap-6">
        <Input onChange={handleInputChange} />
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="w-full md:w-1/2 lg:w-1/3">
            <SelectSingle
              options={depData}
              type="deps"
              placeholder="Department"
              key={`deps-filter`}
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <SelectSingle
              options={locData}
              type="locs"
              placeholder="Location"
              key={`locs-filter`}
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <SelectSingle
              options={funcData}
              type="funcs"
              placeholder="Function"
              key={`funcs-filter`}
            />
          </div>
        </div>
      </div>
      {searchParamsPage.size >= 1 && (
        <div className="p-5 max-md:flex-wrap max-md:gap-7  md:px-8 md:py-8 mx-4 md:mx-8 bg-primary-light flex justify-between">
          <FiltersTag />
          <span
            onClick={() => clearQueryParams()}
            role="button"
            aria-label="Clear All Filters"
            className="text-green-500 hover:text-red-500 cursor-pointer"
          >
            Clear All
          </span>
        </div>
      )}
    </div>
  );
};

export default FiltersAll;
