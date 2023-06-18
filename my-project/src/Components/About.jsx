import React from "react";

const AboutUsSection = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis
            tellus in diam lobortis elementum. Mauris venenatis velit eget
            sapien viverra, sit amet malesuada dui efficitur. Vestibulum a
            bibendum enim, et interdum est. Nullam ut dolor eu elit convallis
            ullamcorper nec sed nisi.
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
