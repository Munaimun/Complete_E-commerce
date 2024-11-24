import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../lib/firebase";

import SignUp from "./SignUp";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-5">
      <span className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-600">
        Sign In Page
      </span>

      {/* FORMS */}
      <div className="flex flex-wrap justify-around px-6 mt-6">
        {/* SIGN-IN FORM */}
        <div className="mb-6 sm:mb-0">
          <button
            className="relative flex sm:h-[50px] sm:w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56"
            onClick={logGoogleUser}
          >
            <span className="relative z-10">Sign in with google</span>
          </button>
        </div>

        {/* SIGN-UP FORM */}
        <div>
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
