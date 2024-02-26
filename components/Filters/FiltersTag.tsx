import useFilterContext from "@/context/FilterContext";
import { UrlParamsOnly } from "@/lib/utils";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const FiltersTag = () => {
  const searchParams = useSearchParams();
  const depsParam = searchParams.get("dept");
  const locsParam = searchParams.get("loc");
  const funcsParam = searchParams.get("fun");
  const searchKey = searchParams.get("q");
  const router = useRouter();
  const { filterDepData, filterFuncData, filterLocData } = useFilterContext();
  const deleteFilterParams = (type: "deps" | "locs" | "funcs") => {
    const urlParams = new URLSearchParams(window.location.search);
    console.log({ type });
    switch (type) {
      case "deps":
        console.log("Called");
        urlParams.delete("dept");
        break;
      case "locs":
        console.log("Called lokooo");
        urlParams.delete("loc");
        break;
      case "funcs":
        urlParams.delete("fun");
        break;
    }
    const newUrlParams = urlParams.toString();
    const newUrl = newUrlParams ? `?${newUrlParams}` : "";
    router?.replace(window.location.pathname + newUrl);
  };

  return (
    <div className="flex gap-3">
      {depsParam && (
        <div className="flex bg-white w-max px-3 py-1 gap-1 items-center">
          <span className="text-slate-600">
            {
              filterDepData?.filter((item) => String(item.id) == depsParam)[0]
                ?.title
            }
          </span>
          <Cross1Icon
            className="cursor-pointer"
            color="green"
            onClick={() => deleteFilterParams("deps")}
          />
        </div>
      )}

      {locsParam && (
        <div className="flex bg-white w-max px-3 py-1 gap-1 items-center">
          <span className="text-slate-600">
            {
              filterLocData?.filter((item) => String(item.id) == locsParam)[0]
                ?.title
            }
          </span>
          <Cross1Icon
            className="cursor-pointer"
            color="green"
            onClick={() => deleteFilterParams("locs")}
          />
        </div>
      )}

      {funcsParam && (
        <div className="flex bg-white w-max px-3 py-1 gap-1 items-center">
          <span className="text-slate-600">
            {
              filterFuncData?.filter((item) => String(item.id) == funcsParam)[0]
                ?.title
            }
          </span>
          <Cross1Icon
            className="cursor-pointer"
            color="green"
            onClick={() => deleteFilterParams("funcs")}
          />
        </div>
      )}
    </div>
  );
};

export default FiltersTag;
