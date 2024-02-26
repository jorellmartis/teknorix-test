export type TDeps = {
  id: number;
  title: string;
};

export type TFuncs = {
  id: number;
  title: string;
};

export type TLocs = {
  id: number;
  title: string;
  city: string;
  country: string;
  zip: string;
};

export type TJobsData = {
  id: number;
  codeL: string;
  title: string;
  description: string;
  type: string;
  positions: number;
  experience: string;
  salary: string;
  industry: string;
  location: TLocs;
  department: TDeps;
  function: TFuncs;
  postedDate: Date;
  hostedUrl: string;
  applyUrl: string;
};
