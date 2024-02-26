import { getJobsData } from "@/api/modules";
import { TJobsData } from "@/typings/api";
import Link from "next/link";
import { FbLogo, LinkLogo, TwitterLogo } from "../Icons/SocialMedia";

const OtherJobs = async () => {
  const otherJobs: TJobsData[] = await getJobsData();

  return (
    <div className="md:w-[25rem] md:sticky md:top-11 common-padding flex me-5 flex-col p-5 h-min gap-10">
      <div className="md:sticky md:top-11 flex gap-8 flex-col p-5 bg-[#F0F3FB] h-min">
        <h2 className="text-xl font-bold">
          <strong className="text-blink">OTHER</strong> JOB OPENINGS
        </h2>
        <ul className="flex flex-col gap-6 ">
          {otherJobs?.slice(0, 4)?.map((job, index) => (
            <li key={`other-job-${index}`}>
              <Link href={`${job?.id}`}>
                <h3 className="font-semibold">{job?.title}</h3>
                {/* <JobTags /> */}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-5">
        <h2 className="text-xl font-bold">
          <strong className="text-blink">Share Job Openings</strong>
          <ul className="pt-5 flex gap-3">
            <li key={`social-fb`}>
              <Link href={`/`}>
                <FbLogo />
              </Link>
            </li>
            <li key={`social-link`}>
              <Link href={`/`}>
                <LinkLogo />
              </Link>
            </li>
            <li key={`social-twit`}>
              <Link href={`/`}>
                <TwitterLogo />
              </Link>
            </li>
          </ul>
        </h2>
      </div>
    </div>
  );
};

export default OtherJobs;
