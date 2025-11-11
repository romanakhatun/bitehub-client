import { Link } from "react-router";
import SocialLogin from "../../components/SocialLogin";
import PageHeader from "../../components/PageHeader";
import FormInput from "../../components/FormInput";
import PasswordForm from "../../components/PasswordForm";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <section className="border-t border-black">
      <PageHeader title={"Welcome Back"} currentPath={"Login"} />

      <div className="max-w-xl mx-auto my-15">
        <form onSubmit={handleLogin}>
          <h3 className="font-garamond text-2xl text-base-content font-medium  mb-3">
            Login
          </h3>
          <div className="space-y-5">
            {/* Email Fields */}
            <FormInput
              label="Email address"
              type="email"
              name="email"
              required={true}
              placeholder="Enter your email address"
            />

            {/* Password Fields */}
            <PasswordForm name="password" />
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
  );
};

export default Login;
