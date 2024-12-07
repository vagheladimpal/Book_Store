import { useState } from "react";
import { instance } from "../AxiosMethod/Axios";
import e from "cors";


const ForgetPassword=()=>{
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handelforgetPassword=(e)=>{
        e.preventDefault()
        const payload={
            email:email,
            newPassword:newPassword,
            confirmPassword:confirmPassword
        }
        instance.post("user/forgetPassword",payload).then((res)=>{
            console.log("your password succesfully set",res)
        })
        .catch((error)=>{console.log("error forget",error)})
    }
    return(
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
          <h1 className="text-2xl font-semibold mb-4">ForgetPassword</h1>
          <form onSubmit={handelforgetPassword}>
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
               New Password
              </label>
              <input
                type="password"
                id="newPassword"
                name="newPassword"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-800">
                confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
        
            {/* <!-- Login Button --> */}
            <button
              type="submit"
              className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
    )
}
export default ForgetPassword