import { TJobsData } from "@/typings/api";
import JobsListCard from "./JobsListCard";

type PageProps = {
  data: TJobsData[];
  name: string;
};
const JobsListing = ({ data, name }: PageProps) => {
  return (
    <section className="jobs-listing | common-padding flex flex-col gap-8">
      <>
        <div>
          <h2 className="font-bold text-2xl">
            {name}
            {/* <strong className="text-blink">Qualityyy</strong> title */}
          </h2>
        </div>
        {data?.map((depJob, index) => (
          <JobsListCard data={depJob} key={`dep-job-${index}`} />
        ))}
      </>
    </section>
  );
};

export default JobsListing;
