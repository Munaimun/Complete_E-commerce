import React, { useState } from "react";

// Define props type for FormInput
interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // 'label' is optional
}

const FormInput: React.FC<FormInputProps> = ({ label, ...otherProps }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const hasValue = otherProps.value?.toString().length || 0;

  return (
    <div className="relative my-12 focus-within:border-black">
      {label && (
        <label
          className={`absolute left-2 transition-all duration-300 pointer-events-none 
            ${
              isFocused || hasValue
                ? "-top-4 text-xs text-black"
                : "top-2 text-base text-gray-500"
            }`}
        >
          {label}
        </label>
      )}
      <input
        className="bg-white text-gray-500 text-lg p-2.5 w-full border-b border-gray-500 focus:outline-none focus:border-black"
        {...otherProps}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default FormInput;
