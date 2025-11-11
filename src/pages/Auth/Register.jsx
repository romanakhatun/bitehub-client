import { Link } from "react-router";
import SocialLogin from "../../components/SocialLogin";
import PageHeader from "../../components/PageHeader";
import FormInput from "../../components/FormInput";
import PasswordForm from "../../components/PasswordForm";

const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault();
  };
  return (
    <section className="border-t border-black">
      <PageHeader title={"Create Account"} currentPath={"Register"} />

      <div className="max-w-xl mx-auto my-15">
        <form onSubmit={handleRegister}>
          <h3 className="font-garamond text-2xl text-base-content font-medium  mb-3">
            Register
          </h3>
          <div className="space-y-5">
            {/* Name Fields */}
            <FormInput
              label="Your Name"
              type="text"
              name="name"
              required={true}
              placeholder="Enter your name"
            />

            {/* Photo URL Fields */}
            <FormInput
              label="Photo URL"
              type="url"
              name="photo"
              required={true}
              placeholder="Enter your Photo URL"
            />

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

            {/* Terms and condition Fields */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="terms"
                className="checkbox rounded-sm checkbox-primary checkbox-xs"
              />
              <span className="text-sm">
                Accept <strong>Terms & Condition</strong>
              </span>
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

        {/* Login Link */}
        <p className="text-center text-sm">
          Have an account?{" "}
          <Link to="/login" className="text-primary font-semibold">
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
