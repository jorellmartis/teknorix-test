import { TJobsData } from "@/typings/api";
import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function groupJobsDataByDepartment(
  jobsData: TJobsData[]
): Record<string, TJobsData[]> {
  return jobsData?.reduce(
    (acc: Record<string, TJobsData[]>, job: TJobsData) => {
      const departmentKey = job?.department?.title;
      acc[departmentKey] = acc[departmentKey] || [];
      acc[departmentKey]?.push(job);
      return acc;
    },
    {}
  );
}

export const debounce = <F extends (...args: any[]) => void>(
  func: F,
  delay: number
) => {
  let timer: NodeJS.Timeout;
  return function (...args: Parameters<F>) {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

export const UrlParamsOnly = () => {
  const searchParams = window.location.search;
  const queryParamsStartIndex = searchParams.indexOf("?");
  const queryString =
    queryParamsStartIndex !== -1
      ? searchParams.substring(queryParamsStartIndex + 1)
      : "";
  return { queryString };
};
