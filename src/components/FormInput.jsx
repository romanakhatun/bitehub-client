import React from "react";

const FormInput = ({
  label,
  type,
  name,
  placeholder,
  required,
  isRequired = true,
}) => {
  return (
    <div>
      <label className="label text-sm font-semibold">
        {label} {isRequired && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="input input-bordered w-full"
        placeholder={placeholder}
      />
    </div>
  );
};

export default FormInput;
