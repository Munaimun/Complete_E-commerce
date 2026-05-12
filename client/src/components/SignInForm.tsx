/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, ChangeEvent, FormEvent, useContext } from "react";
import axios from "axios";

import toast from "react-hot-toast";

import FormInput from "./Form-Input/FormInput";
import { config } from "../../config";

import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const { setAuth } = useContext(UserContext);
  const navigate = useNavigate();

  const resetFormFields = () => setFormFields(defaultFormFields);

  // Type the event parameter as FormEvent for form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${config?.baseUrl}/users/login`, {
        email,
        password,
      });

      setAuth(response.data.user, response.data.token);

      resetFormFields();
      navigate("/");
      toast.success("Login Successful 😄");
    } catch (error: any) {
      if (error?.response?.status === 401) {
        toast.error("Invalid credential");
      } else {
        toast.error("Authentication failed");
      }
      console.error(error);
    }
  };

  // Type the event parameter as ChangeEvent<HTMLInputElement> for input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="w-96 flex flex-col">
      <span className="font-semibold">Already have an account!</span>
      <span className="text-2xl text-yellow-400 font-semibold">
        Sign In with email and password
      </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="flex flex-wrap justify-between">
          <button
            className="relative h-12 w-40 overflow-hidden border border-indigo-600 text-indigo-600 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-indigo-600 before:duration-300 before:ease-out hover:text-white hover:shadow-indigo-600 hover:before:h-40 hover:before:w-40 hover:before:opacity-80"
            type="submit"
          >
            <span className="relative z-10">Sign In</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
