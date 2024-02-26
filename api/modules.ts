const baseURL = process.env.NEXT_PUBLIC_API_URL;
export const getLocations = async () => {
  const res = await fetch(`${baseURL}/api/v1/locations`);
  return res.json();
};

export const getDeps = async () => {
  const res = await fetch(`${baseURL}/api/v1/departments`);
  return res.json();
};

export const getFuncs = async () => {
  const res = await fetch(`${baseURL}/api/v1/functions`);
  return res.json();
};

export const getJobsData = async (query?: string) => {
  try {
    console.log(query);
    const res = await fetch(`${baseURL}/api/v1/jobs?${query ? query : ""}`);
    return res.json();
  } catch (error) {
    throw new Error(`error: ${error}`);
  }
};

export const getJobsDetail = async (pID: string) => {
  try {
    console.log(pID);
    const res = await fetch(`${baseURL}/api/v1/jobs/${pID}`);
    return res.json();
  } catch (error) {
    throw new Error(`error: ${error}`);
  }
};
