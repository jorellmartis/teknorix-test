import { TDeps, TFuncs, TJobsData, TLocs } from "@/typings/api";
import { Dispatch, SetStateAction, createContext, useContext } from "react";
type FilterContextType = {
  jobList: TJobsData[];
  // setActiveDep: Dispatch<SetStateAction<number | undefined>>;
  // setActiveLoc: Dispatch<SetStateAction<number | undefined>>;
  // setActiveFunc: Dispatch<SetStateAction<number | undefined>>;
  setFilterDepData: Dispatch<SetStateAction<TDeps[]>>;
  setFilterLocData: Dispatch<SetStateAction<TLocs[]>>;
  setFilterFuncData: Dispatch<SetStateAction<TFuncs[]>>;
  setSearchKeyword: Dispatch<SetStateAction<string>>;
  filterDepData: TDeps[];
  filterFuncData: TFuncs[];
  filterLocData: TLocs[];
  searchKeyword: string;
};
export const FilterContext = createContext<FilterContextType>({
  jobList: [],
  setFilterDepData: () => {},
  setFilterFuncData: () => {},
  setFilterLocData: () => {},
  setSearchKeyword: () => {},
  filterLocData: [],
  filterDepData: [],
  filterFuncData: [],
  searchKeyword: "",
});

const useFilterContext = () => {
  const FilterCtx = useContext(FilterContext);
  if (FilterCtx === undefined) {
    throw new Error("useFilterContext must be used within a FilterContext");
  }
  return FilterCtx;
};

export default useFilterContext;
