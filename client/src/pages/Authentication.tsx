import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";

import SignInForm from "../components/SignInForm";
import SignUp from "../components/SignUp";

const Authentication = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  // redirect to home page if user is logged in
  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  return (
    <div className="max-w-screen-xl mx-auto flex flex-wrap justify-around mt-4">
      <SignInForm />
      <SignUp />
    </div>
  );
};

export default Authentication;
