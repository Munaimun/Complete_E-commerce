import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { UserTypes } from "../../type";
import { auth } from "../lib/firebase";
import Container from "./Container";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const UserInfo = ({ currentUser }: UserTypes) => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();


  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setCurrentUser(user);  // Ensure currentUser is updated correctly
    }
  }, []);

  const handleClick = () => {
    auth.signOut();
    navigate("/");
    setCurrentUser(null);
    toast.success("signout successfull");
  };

  return (
    <Container className="py-5 text-white">
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-16">
        <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-10">
          <div className="text-start flex-1">
            <h2 className="text-xl font-bold tracking-tight sm:text-4xl">
              Welcome back, dear{" "}
              <span className="underline underline-offset-2 decoration-[1px] font-medium">
                {currentUser?.displayName}
              </span>
            </h2>
            <p className="text-start *:mt-6 max-w-3xl text-base mt-3 leading-6 text-gray-300">
              Email: <span className="font-semibold">{currentUser?.email}</span>{" "}
              {/* Display the email */}
            </p>
          </div>
        </div>
        <div className="mt-10 flex items-center gap-x-5 px-4">
          <button
            onClick={handleClick}
            className="rounded-md bg-white px-8 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            Logout
          </button>
        </div>
        <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
          aria-hidden="true"
        >
          <circle
            cx={512}
            cy={512}
            r={512}
            fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
            fillOpacity="0.7"
          />
          <defs>
            <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
              <stop stopColor="#7775D6" />
              <stop offset={1} stopColor="#E935C1" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </Container>
  );
};

export default UserInfo;
