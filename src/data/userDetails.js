import axios from "axios";
axios.defaults.baseURL = "http://refertest.pythonanywhere.com/";
export const getUserDetails = async (setUserData) => {
  try {
    const { data } = await axios.get("/user/data");
    setUserData(data.data);
  } catch (error) {
    console.log(error);
  }
};