import { Link, useNavigate } from "react-router";
import NotFoundBg from "../assets/not-found-bg.png";
import NotFoundIcon from "../assets/not-found.svg";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div
      className="min-h-screen relative bg-cover bg-secondary-content flex items-center bg-center"
      style={{ backgroundImage: `url(${NotFoundBg})` }}
    >
      <div className="container max-w-4xl mx-auto text-center">
        <img
          className="h-[200px] mx-auto"
          src={NotFoundIcon}
          alt="Not Found Icon"
        />
        <div>
          <h1 className="section-heading font-garamond my-4">
            The Page You Are Looking For Doesn‘t Exist
          </h1>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="btn-primary cursor-pointer px-6 py-3"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
