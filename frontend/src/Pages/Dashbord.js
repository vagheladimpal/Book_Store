import { instance } from "../AxiosMethod/Axios";

export const Dashbord = () => {
  const handelgetData = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    const header = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    instance.get("https://api.escuelajs.co/api/v1/auth/profile", header)
      .then((res) => {
        console.log("profiledata", res);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <h1>you login is successfully Welcome to dimpal Clube</h1>
      <button onClick={handelgetData}>Get Data</button>
    </>
  );
};
