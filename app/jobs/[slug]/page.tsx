import { getJobsData, getJobsDetail } from "@/api/modules";
import Wyswig from "@/components/Blocks/Wyswig";
import { BuildingIcon, MapPin } from "@/components/Icons/TagIcons";
import OtherJobs from "@/components/Jobs/OtherJobs";
import JobBanner from "@/components/UI/JobBanner";
import JobTags from "@/components/UI/JobTags";
import { TJobsData } from "@/typings/api";
import { notFound } from "next/navigation";

type PageParams = {
  params: {
    slug: number;
  };
};

export async function generateStaticParams() {
  const slugs: TJobsData[] = await getJobsData();
  const arr =
    slugs?.map((slug: TJobsData) => ({
      slug: String(slug?.id),
    })) || [];
  console.log(arr, "getting values");
  return arr;
}
const JobsDetail = async ({ params }: PageParams) => {
  const { slug } = params;
  console.log(slug, "pafgeee");
  const getPageData: TJobsData = await getJobsDetail(String(slug));
  if (!getPageData || getPageData?.id == undefined) return notFound();

  return (
    <>
      <JobBanner
        JobBtnLink={getPageData?.applyUrl}
        JobBtnText="Apply"
        JobDepartment={getPageData?.department?.title}
        JobTitle={getPageData?.title}
      >
        <div className="mt-5">
          <JobTags data={getPageData} />
        </div>
      </JobBanner>
      <div className="flex site-container flex-col md:flex-row md:justify-between">
        <div className="md:max-w-[50%]">
          <Wyswig data={getPageData?.description} />
        </div>
        <OtherJobs />
      </div>
    </>
  );
};

export default JobsDetail;
