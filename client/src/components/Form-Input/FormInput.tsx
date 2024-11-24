import React from "react";

// Define props type for FormInput
interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // 'label' is optional
}

const FormInput: React.FC<FormInputProps> = ({ label, ...otherProps }) => {
  return (
    <div className="relative my-12">
      {label && (
        <label
          className={`absolute left-1 top-2 text-gray-500 text-base transition-all duration-300 pointer-events-none ${
            otherProps.value?.toString().length
              ? "-top-4 text-xs text-black"
              : ""
          }`}
        >
          {label}
        </label>
      )}
      <input
        className="bg-white text-gray-500 text-lg p-2.5 w-full border-b border-gray-500 focus:outline-none focus:border-black"
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
