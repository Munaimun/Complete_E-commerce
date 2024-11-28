import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { store } from "../lib/store";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";

import Container from "../components/Container";
import UserInfo from "../components/UserInfo";
import Loading from "../components/Loading";

const MyAccount = () => {
  const { currentUser, getUserInfo, isLoading } = store();
  const navigate = useNavigate();

  const handleClick = () => navigate("/auth");

  useEffect(() => {
    const onSub = onAuthStateChanged(auth, (user) => {
      getUserInfo(user?.uid);
    });
    return () => onSub();
  }, [getUserInfo]);

  return (
    <Container>
      {currentUser ? (
        <UserInfo currentUser={currentUser} />
      ) : (
        <div>
          <button
            onClick={handleClick}
            className="before:ease relative h-12 w-40 overflow-hidden border border-green-500 bg-green-500 text-white shadow-2xl transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-10 before:duration-700 hover:shadow-green-500 hover:before:-translate-x-40"
            type="button"
          >
            <span className="relative z-10">Google Sign In</span>
          </button>
        </div>
      )}
      {isLoading && <Loading />}
    </Container>
  );
};

export default MyAccount;
