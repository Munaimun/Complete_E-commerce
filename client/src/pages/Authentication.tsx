import SignInForm from "../components/SignInForm";
import SignUp from "../components/SignUp";

const Authentication = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-wrap justify-around mt-4">
      <SignInForm />
      <SignUp />
    </div>
  );
};

export default Authentication;
