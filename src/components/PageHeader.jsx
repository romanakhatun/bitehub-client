import { Link } from "react-router";
import { IoIosArrowForward } from "react-icons/io";

const PageHeader = ({ title, currentPath }) => {
  return (
    <div className="py-15 bg-secondary-content">
      <h1 className="section-heading font-garamond">{title}</h1>
      <div className="flex justify-center items-center">
        <Link className="text-[#00000099]" to="/">
          Home
        </Link>
        <IoIosArrowForward className="text-[#00000099]" />
        <span className="text-[#565656] font-medium">{currentPath}</span>
      </div>
    </div>
  );
};

export default PageHeader;
