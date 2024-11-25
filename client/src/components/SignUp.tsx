/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, ChangeEvent, FormEvent } from "react"; // Import necessary types
import toast from "react-hot-toast";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../lib/firebase";

import FormInput from "./Form-Input/FormInput";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  // Type the event parameter as FormEvent for form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      // TypeScript doesn't know that user exists, so we use optional chaining to handle this
      const userCredential = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const user = userCredential?.user;

      if (!user) {
        throw new Error("User not found");
      }

      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
      toast.success("Successfully Signed Up 🎉");
    } catch (error: any) {
      // Use 'any' type for error to avoid unknown type error
      if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already in use");
      } else {
        console.log(error);
      }
    }
  };

  // Type the event parameter as ChangeEvent<HTMLInputElement> for input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="w-96 flex flex-col">
      <span className="font-semibold">Don't have an account!</span>
      <span className="text-2xl text-yellow-400 font-semibold">
        Sign up with email and password
      </span>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <FormInput
          label="Confirm Password"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />

        <button
          className="before:ease relative h-12 w-40 overflow-hidden border border-blue-500 text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2 before:h-0 before:w-64 before:origin-center before:-translate-x-20 before:rotate-45 before:bg-blue-500 before:duration-300 hover:text-white hover:shadow-blue-500 hover:before:h-64 hover:before:-translate-y-32 mt-[-15px]"
          type="submit"
        >
          <span className="relative z-10">Sign Up</span>
        </button>
      </form>
    </div>
  );
};

export default SignUp;
