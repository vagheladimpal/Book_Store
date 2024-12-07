import { useState } from "react";
import { instance } from "../AxiosMethod/Axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      email: email,
      password: password,
    };

    instance
      .post("/user", payload)
      .then((res) => {
        console.log(res);
         navigate("/login")
         alert("Register success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="bg-sky-100 flex justify-center items-center h-screen">
        {/* <!-- Left: Image --> */}
        <div className="w-1/2 h-screen hidden lg:block">
          <img
            src="https://img.freepik.com/fotos-premium/imagen-fondo_910766-187.jpg?w=826"
            alt="Placeholder Image"
            className="object-cover w-full h-full"
          />
        </div>
        {/* <!-- Right: Login Form --> */}
        <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
          <h1 className="text-2xl font-semibold mb-4">Register</h1>
          <form onSubmit={handleRegisterSubmit}>
            {/* <!-- Email Input --> */}
            <div className="mb-4 bg-sky-100">
              <label htmlFor="email" className="block text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
            {/* <!-- Password Input --> */}
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
              <a href="#" className="hover:underline">
                Forgot Password?
              </a>
            </div>
            {/* <!-- Login Button --> */}
            <button
              type="submit"
              className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
