import { useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      if (auth?.user) {
        return navigate("/chat");
      }
      return navigate("/login");
    }, 3000);
  }, [auth]);
  return <div>NotFound</div>;
};

export default NotFound;
