import React from "react";
import { Link } from "react-router";
import { MdRestaurant, MdCake } from "react-icons/md";

const FeaturedContent = () => {
  const featuredSections = [
    {
      id: 1,
      title: "Top Local Discoveries",
      subtitle: "Restaurants & Street Foods",
      description:
        "Explore the highest-rated local restaurants and the must-try street food stalls, curated by the community.",
      icon: MdRestaurant,
      linkTo: "/top-discoveries",
      buttonText: "View Top Picks",
      bgColor: "bg-[#e6ffe6]",
    },
    {
      id: 2,
      title: "Foodie Community Spotlight",
      subtitle: "Bloggers & Creators",
      description:
        "Meet our Food Blogger of the Month! See their recent reviews, favorite dishes, and connect with them.",
      icon: MdCake,
      linkTo: "/food-bloggers",
      buttonText: "Meet the Bloggers",
      bgColor: "bg-[#fff7e6]",
    },
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Main Section Heading */}
        <h2 className="section-heading text-primary font-garamond mb-4">
          Community Highlights
        </h2>
        <p className="section-text mb-12 max-w-xl">
          Dive right into the most discussed and loved food spots and meet the
          faces behind the best reviews.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {featuredSections.map((item) => (
            <div
              key={item.id}
              // Apply custom background color and spacious padding
              className={`p-8 md:p-12 rounded-2xl ${item.bgColor} shadow-lg transition-all duration-300 hover:shadow-xl`}
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <item.icon className="text-5xl text-secondary" />

                <div>
                  {/* Subtitle */}
                  <p className="text-sm font-semibold text-gray-700 mb-1 tracking-wider uppercase">
                    {item.subtitle}
                  </p>

                  {/* Main Title (Matching Design's style) */}
                  <h3 className="text-3xl font-garamond font-medium text-base-content mb-4">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base text-gray-600 mb-6">
                    {item.description}
                  </p>

                  {/* Call to Action Button */}
                  <Link
                    to={item.linkTo}
                    // Using your custom button styles
                    className="btn-primary px-6 py-3"
                  >
                    {item.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedContent;
