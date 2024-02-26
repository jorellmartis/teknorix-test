import Button from "./Button";

type JobBannerProps = {
  children: React.ReactNode;
  JobTitle: string;
  JobDepartment: string;
  JobBtnText: string;
  JobBtnLink: string;
};
const JobBanner = ({
  JobBtnText,
  JobDepartment,
  JobTitle,
  JobBtnLink,
  children,
}: JobBannerProps) => {
  return (
    <section className="job-banner | site-container common-padding p-5 flex-col gap-5">
      <div className="flex flex-col-reverse gap-2">
        <h1 className="font-extrabold text-4xl">{JobTitle}</h1>
        <h2 className="font-bold">{JobDepartment}</h2>
      </div>
      {children}
      <Button
        target="_blank"
        href={JobBtnLink}
        btnText={JobBtnText}
        className="my-10"
      />
      <hr className="" />
    </section>
  );
};

export default JobBanner;
