import { Link } from "react-router";
import ReviewBg from "../../assets/review-cta.jpg";

const ReviewCTA = () => {
  return (
    <div
      className="relative min-h-[80vh] flex items-center  bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${ReviewBg})` }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-12 items-center gap-10">
          <div className="xl:col-span-7">
            <h2 className="text-5xl md:text-8xl text-white font-garamond font-medium mb-6 leading-tight">
              Ready to Share Your Food Story?
            </h2>

            <p className="text-base text-gray-300 mb-8 max-w-lg">
              Every local eatery deserves an honest spotlight. Be the next
              reviewer the community follows and help others discover their next
              favorite bite.
            </p>

            <Link to="/add-review" className="btn-primary px-6 py-3">
              Start Posting Your Review
            </Link>
          </div>
          <div className="lg:col-span-5 hidden xl:flex justify-end">
            <h1 className="text-9xl opacity-12 font-garamond text-white">
              REVIEW
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCTA;
