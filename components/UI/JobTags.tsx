import { cn } from "@/lib/utils";
import { TJobsData } from "@/typings/api";
import React from "react";
import { BuildingIcon, MapPin } from "../Icons/TagIcons";

type JobTagsProps = {
  data?: TJobsData;
};

const JobTags = ({ data }: JobTagsProps) => {
  return (
    <div className="flex gap-3">
      <div key={"tag-deps"} className={cn("flex gap-2 items-center")}>
        <BuildingIcon className="h-5" />
        <p>{data?.department?.title}</p>
      </div>
      <div
        key={"tag-locs"}
        className={cn(
          "flex gap-2 items-center",
          // type === "type 2" &&
          ""
        )}
      >
        <MapPin className="h-5" />
        <p>{data?.location?.title}</p>
      </div>
      <div
        key={"tag-type"}
        className={cn(
          "flex gap-2 items-center bg-[#D3D7E7] text-slate-500 uppercase font-semibold text-[10px] p-1"
        )}
      >
        <p>{data?.type}</p>
      </div>
    </div>
  );
};

export default JobTags;
