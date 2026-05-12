import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";

import Container from "../components/Container";
import UserInfo from "../components/UserInfo";

const MyAccount = () => {
  const { currentUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleClick = () => navigate("/auth");

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
            <span className="relative z-10">Go to Sign In page</span>
          </button>
        </div>
      )}
    </Container>
  );
};

export default MyAccount;
