import { Link } from "react-router";

const NewsletterSection = () => {
  return (
    <div className="bg-primary-content py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          <div className="pr-0 lg:pr-10">
            <h3 className="text-3xl md:text-4xl font-garamond font-medium text-base-content mb-6">
              Subscribe To Our Newsletter
            </h3>

            <form onSubmit={(e) => e.preventDefault()} className="w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="input w-full p-4 md:p-6 text-lg rounded-xl text-base-content placeholder-gray-600 focus:outline-none bg-[#d6ffb38e]"
                required
              />
            </form>
          </div>

          <div className="relative">
            <h2 className="absolute -top-10 right-0 md:right-auto md:-left- text-7xl md:text-9xl font-garamond font-bold text-white opacity-20 transform -rotate-6 hidden sm:block">
              20%
            </h2>

            <h3 className="text-3xl md:text-4xl font-garamond font-medium text-base-content mb-6 leading-snug">
              Share Your Opinion To Win <br />
              <strong>Foodie Prize Of The Month</strong>
            </h3>

            <Link
              to="/add-review"
              className="py-3 px-8 rounded-xl text-base-content border border-black hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Start Your Review
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;
