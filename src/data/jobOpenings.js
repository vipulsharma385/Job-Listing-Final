import axios from "axios";
export const getJobOpenings = async (setJobData) => {
  try {
    const { data } = await axios.get("job/openings");
    setJobData(data.data);
    console.log(data.data);
  } catch (error) {
    console.log(error);
  }
};