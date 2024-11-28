/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, ChangeEvent, FormEvent, useContext } from "react";

import toast from "react-hot-toast";

import FormInput from "./Form-Input/FormInput";
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../lib/firebase";

import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const resetFormFields = () => setFormFields(defaultFormFields);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  // Type the event parameter as FormEvent for form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredential = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      if (!userCredential) {
        throw new Error("Failed to authenticate user");
      }

      const { user } = userCredential;

      setCurrentUser(user);

      resetFormFields();
      navigate("/");
      toast.success("Login Successful 😄");
    } catch (error: any) {
      if (error.code === "auth/invalid-credential") {
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
          </button>{" "}
          <button
            className="text-red hover:before:bg-redborder-red-500 relative h-[50px] w-40 overflow-hidden border border-orange-500 bg-white px-3 text-orange-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-orange-500 before:transition-all before:duration-500 hover:text-white hover:shadow-orange-500 hover:before:left-0 hover:before:w-full"
            type="button"
          >
            <span className="relative z-10" onClick={signInWithGoogle}>
              Google Sign In
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
