import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Toast from "../Component/Toast";
import { instance } from "../AxiosMethod/Axios";
import login from "../Assets/login1.jpg";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };

    console.log(payload);

    instance
      .get("login", payload)
      .then((res) => {
        // localStorage.setItem("token", JSON.stringify(res.data.access_token));
        alert("your Login successfully");
        navigate("/dashbord");
        console.log("Login successfully", res);
      })
      .catch((error) => {
        alert("your login fail");
        console.error("Login failed", error);
      });
  };

  const handlechange = () => {
    navigate("/forget");
  };

  const handleregister = () => {
    navigate("/register");
  };
  return (
    <>
      <div className="bg-sky-100 flex justify-center items-center h-screen">
        {/* <!-- Left: Image --> */}
        <div className="w-1/2 h-screen hidden lg:block">
          <img
            src={login}
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>
        {/* <!-- Right: Login Form --> */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Login</h1>
          <form onSubmit={handleSubmit}>
            {/* <!-- Email Input --> */}
            <div className="mb-4 bg-sky-100">
              <label htmlFor="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-800">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {/* <!-- Forgot Password Link --> */}
            <div className="mb-6 text-blue-500">
              <a href="#" className="hover:underline" onClick={handlechange}>
                Forgot Password?
              </a>
            </div>
            {/* <!-- Login Button --> */}
            <button
              type="submit"
              className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Login
            </button>
            <p class="mt-4 text-sm">
              Already Have An Account?{" "}
              <span class="underline  cursor-pointer" onClick={handleregister}>
                Register
              </span>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
