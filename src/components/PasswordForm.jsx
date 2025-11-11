import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const PasswordForm = ({ name }) => {
  const [showPass, setShowPass] = useState(true);

  return (
    <div>
      <label className="label text-sm font-semibold">
        Password <span className="text-red-500">*</span>
      </label>
      <label className="input w-full">
        <input
          type={showPass ? "text" : "password"}
          name={name}
          required
          placeholder="Enter your password"
        />
        <span onClick={() => setShowPass(!showPass)} className="cursor-pointer">
          {showPass ? <FaEyeSlash /> : <FaEye />}
        </span>
      </label>
    </div>
  );
};

export default PasswordForm;
