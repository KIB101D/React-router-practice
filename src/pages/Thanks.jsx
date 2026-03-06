import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Thanks() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>Thanks! You will be rederected to the home page in 5 seconds..</div>
  );
}

export default Thanks;
