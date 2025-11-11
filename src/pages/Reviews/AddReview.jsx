import { useState } from "react";
import { FaStar } from "react-icons/fa";
import PageHeader from "../../components/PageHeader";
import FormInput from "../../components/FormInput";

const AddReview = () => {
  // State for handling the Star Rating input
  const [rating, setRating] = useState(0);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Logic to handle review submission (form data + rating state)
    console.log("Submitting Review with Rating:", rating);
  };

  return (
    <section className="border-t border-black">
      <PageHeader title={"Submit Your Review"} currentPath={"Add Review"} />

      <div className="max-w-xl mx-auto my-15 py-12 px-4 md:px-0">
        <form onSubmit={handleSubmitReview}>
          <h3 className="font-garamond text-2xl text-base-content font-medium mb-3">
            Add Your Local Food Review
          </h3>

          <div className="space-y-5">
            {/* Food Name */}
            <FormInput
              label="Food Name"
              type="text"
              name="foodName"
              required={true}
              placeholder="e.g., Spicy Lamb Biryani, Artisan Pizza"
            />

            {/* Food Image URL */}
            <FormInput
              label="Food Image URL"
              type="url"
              name="foodImage"
              required={true}
              placeholder="Enter direct link to the photo (e.g., Imgur)"
            />

            {/* Restaurant Name */}
            <FormInput
              label="Restaurant Name"
              type="text"
              name="restaurantName"
              required={true}
              placeholder="e.g., The Curry House"
            />

            {/*  Location */}
            <FormInput
              label="Location (City/Neighborhood)"
              type="text"
              name="location"
              required={true}
              placeholder="e.g., Downtown, Manhattan, Sector 5"
            />

            {/* Star Rating (Custom Component) */}
            <div>
              <label className="label text-sm font-semibold mb-2 block">
                Your Rating <span className="text-red-500">*</span>
              </label>
              <div className="flex justify-start gap-1">
                {[...Array(5)].map((star, index) => {
                  const ratingValue = index + 1;
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={ratingValue}
                        onClick={() => setRating(ratingValue)}
                        // Hidden radio button
                        className="hidden"
                      />
                      <FaStar
                        className="cursor-pointer transition-colors duration-200"
                        // If current value is less than or equal to the selected rating, make it yellow
                        color={ratingValue <= rating ? "#ffd156" : "#e4e5e9"}
                        size={30}
                      />
                    </label>
                  );
                })}
                <span className="ml-3 text-lg font-bold text-gray-700">
                  {rating > 0 ? `${rating} / 5` : ""}
                </span>
              </div>
            </div>

            {/* Review Text */}
            <div>
              <label className="label text-sm font-semibold">
                Review Text <span className="text-red-500">*</span>
              </label>
              <textarea
                name="reviewText"
                required
                rows="6"
                className="textarea textarea-bordered w-full"
                placeholder="Write your detailed and honest review here..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="btn-secondary w-full">Submit Review</button>
          </div>
        </form>

        {/*  Placeholder for success/error message */}
        <p className="text-center mt-6 text-sm text-green-600">
          Thank you for contributing to the Local Food Lovers Network!
        </p>
      </div>
    </section>
  );
};

export default AddReview;
