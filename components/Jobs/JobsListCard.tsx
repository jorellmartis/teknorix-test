import { TJobsData } from "@/typings/api";
import Button from "../UI/Button";
import JobTags from "../UI/JobTags";
import { BuildingIcon, MapPin } from "../Icons/TagIcons";

const JobsListCard = ({ data }: { data: TJobsData }) => {
  console.log(data, "jobs tags only left");
  return (
    <div className="flex flex-col max-md:gap-5 md:items-center md:flex-row md:justify-between ">
      <div className="flex flex-col md:w-max[85%]">
        <h3 className="font-semibold">{data?.title}</h3>
        <JobTags data={data} />
      </div>
      <div className="flex gap-3">
        <Button href={data?.applyUrl} btnText="Apply" />
        <Button href={`jobs/${data?.id}`} type="tertiary" btnText="View" />
      </div>
    </div>
  );
};

export default JobsListCard;
