"use client";
import { getJobsData } from "@/api/modules";
import FiltersAll from "@/components/Filters/FiltersAll";
import JobsListing from "@/components/Jobs/JobsListing";
import Empty from "@/components/UI/Empty";
import SkeletonLoader from "@/components/UI/SkeletonLoader";
import { FilterContext } from "@/context/FilterContext";
import { UrlParamsOnly, groupJobsDataByDepartment } from "@/lib/utils";
import { TDeps, TFuncs, TJobsData, TLocs } from "@/typings/api";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const Jobs = () => {
  const searchParams = useSearchParams();
  const depsParam = searchParams.get("dept");
  const locsParam = searchParams.get("loc");
  const funcsParam = searchParams.get("fun");
  const searchKey = searchParams.get("q");
  const [jobList, setJobList] = useState<TJobsData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [filterDepData, setFilterDepData] = useState<TDeps[]>([]);
  const [filterFuncData, setFilterFuncData] = useState<TFuncs[]>([]);
  const [filterLocData, setFilterLocData] = useState<TLocs[]>([]);
  const [searchKeyword, setSearchKeyword] = useState<string>(
    searchKey ? searchKey : ""
  );

  const getListOfJobs = async () => {
    const { queryString } = UrlParamsOnly();
    setLoading(true);
    const jobData: TJobsData[] = await getJobsData(queryString);
    setJobList(jobData);
    setLoading(false);
  };
  useEffect(() => {
    getListOfJobs();
  }, [depsParam, locsParam, funcsParam, searchKey]);
  return (
    // <Suspense fallback={<div>loading</div>}>
    <FilterContext.Provider
      value={{
        jobList,
        ...{ filterDepData, setFilterDepData },
        ...{ filterFuncData, setFilterFuncData },
        ...{ filterLocData, setFilterLocData },
        ...{ searchKeyword, setSearchKeyword },
      }}
    >
      <FiltersAll />
      {jobList.length === 0 && !loading ? (
        <Empty />
      ) : (
        <>
          {loading ? (
            <SkeletonLoader type="list" />
          ) : (
            <>
              {Object.entries(groupJobsDataByDepartment(jobList)).map(
                ([department, jobList]) => (
                  <JobsListing
                    data={jobList}
                    key={department}
                    name={department}
                  />
                )
              )}
            </>
          )}
        </>
      )}
    </FilterContext.Provider>
    // </Suspense>
  );
};

export default Jobs;
