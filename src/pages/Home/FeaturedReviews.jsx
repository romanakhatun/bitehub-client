import React from "react";
import { Link } from "react-router";
import { FaStar } from "react-icons/fa"; // For the star rating

// --- Dummy Data (use your own source) ---
const featuredReviewsData = [
  // ... (data from above)
  {
    id: 1,
    image:
      "https://www.themetechmount.com/bitehub/wp-content/uploads/2024/04/foodmenu-01.jpg",
    foodName: "Coconut Fish Curry",
    restaurant: "The Spice Market",
    location: "Downtown, NYC",
    reviewer: "Anya Sharma",
    rating: 4.5,
  },
  {
    id: 2,
    image:
      "https://www.themetechmount.com/bitehub/wp-content/uploads/2024/04/foodmenu-01.jpg",
    foodName: "Delicious Biryani",
    restaurant: "Bombay Bistro",
    location: "Midtown, NYC",
    reviewer: "Mark Chen",
    rating: 5.0,
  },
  {
    id: 3,
    image:
      "https://www.themetechmount.com/bitehub/wp-content/uploads/2024/04/foodmenu-01.jpg",
    foodName: "Classic Butter Chicken",
    restaurant: "Punjabi Grill",
    location: "Uptown, NYC",
    reviewer: "Jessica Lee",
    rating: 4.2,
  },
  {
    id: 4,
    image:
      "https://www.themetechmount.com/bitehub/wp-content/uploads/2024/04/foodmenu-01.jpg",
    foodName: "Classic Butter Chicken",
    restaurant: "Punjabi Grill",
    location: "Uptown, NYC",
    reviewer: "Jessica Lee",
    rating: 4.2,
  },
];

// Helper to render stars
const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <FaStar
        key={i}
        className={i < fullStars ? "text-yellow-500" : "text-gray-300"}
      />
    );
  }
  return <div className="flex text-sm gap-0.5">{stars}</div>;
};

const FeaturedReviews = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading font-garamond text-primary">
          Featured Reviews
        </h2>
        <p className="section-text mb-12">
          See what the community is raving about. Honest opinions and delicious
          discoveries near you.
        </p>

        {/* Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {featuredReviewsData.map((review) => (
            <div
              key={review.id}
              className="card-common text-center hover:-translate-y-1"
            >
              <div className="mx-auto w-full max-w-[200px] mb-6">
                <div className="relative overflow-hidden aspect-square border-[7px] border-[#dfdfdf]">
                  <img
                    src={review.image}
                    alt={review.foodName}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-2xl font-garamond font-medium text-base-content mb-3">
                {review.foodName}
              </h3>

              <p className="text-sm text-gray-500 font-semibold mb-1">
                {review.restaurant} &bull; {review.location}
              </p>

              <p className="text-xs text-primary mb-3 italic">
                Reviewed by {review.reviewer}
              </p>

              <div className="flex justify-center mb-6">
                <StarRating rating={review.rating} />
              </div>

              <Link
                to={`/reviews/${review.id}`}
                className="btn-primary border border-primary px-6 py-2"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedReviews;
