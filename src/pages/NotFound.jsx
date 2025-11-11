import { Link } from "react-router";
import NotFoundBg from "../assets/not-found-bg.png";
import NotFoundIcon from "../assets/not-found.svg";

const NotFound = () => {
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
        <Link to="/" className="btn-primary px-6 py-3">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
