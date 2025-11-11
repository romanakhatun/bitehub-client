import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";
import SocialLogin from "../../components/SocialLogin";

const Login = () => {
  const [showPass, setShowPass] = useState(true);
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="border-t border-black">
      <section className="">
        <div className="py-15 bg-secondary-content">
          <h1 className="section-heading font-garamond">Welcome Back</h1>
          <div className="flex justify-center items-center">
            <Link className="text-[#00000099]" to="/">
              Home
            </Link>
            <IoIosArrowForward className="text-[#00000099]" />
            <span className="text-[#565656] font-medium">Login</span>
          </div>
        </div>

        <div className="max-w-xl mx-auto my-15">
          <form onSubmit={handleLogin}>
            <h3 className="font-garamond text-2xl text-base-content font-medium  mb-3">
              Login
            </h3>
            <div className="space-y-5">
              {/* Email Fields */}
              <div>
                <label className="label text-sm font-semibold">
                  Email address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="input input-bordered w-full"
                  placeholder="Enter your email address"
                />
              </div>

              {/* Password Fields */}
              <div>
                <label className="label text-sm font-semibold">
                  Password <span className="text-red-500">*</span>
                </label>
                <label className="input w-full">
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    required
                    placeholder="Enter your password"
                  />
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="cursor-pointer"
                  >
                    {showPass ? <FaEyeSlash /> : <FaEye />}
                  </span>
                </label>
              </div>

              <button className="btn-secondary">Submit</button>
            </div>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <div className="grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-500 text-sm">or</span>
            <div className="grow h-px bg-gray-300"></div>
          </div>

          <SocialLogin />

          {/* Register Link */}
          <p className="text-center text-sm">
            Don’t Have An Account?{" "}
            <Link to="/register" className="text-primary font-semibold">
              Register
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
