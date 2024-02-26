import { Skeleton } from "./Base/SkeletonBase";

type PageProps = {
  type?: "list" | "page";
};

const SkeletonLoader = ({ type = "list" }: PageProps) => {
  switch (type) {
    case "list":
      return (
        <div className={"w-full h-full flex flex-col gap-5 px-4 mt-10"}>
          {Array.from({ length: 5 }, (_, index) => (
            <div key={`skeleton-list${index}`} className="flex gap-2 ">
              <Skeleton className="grow h-16 rounded-full bg-primary-light" />
            </div>
          ))}
        </div>
      );
  }
};

export default SkeletonLoader;
