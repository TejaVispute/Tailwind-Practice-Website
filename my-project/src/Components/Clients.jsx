import React from "react";

const ClientTestimonialsSection = () => {
  const testimonials = [
    {
      name: "John Doe",
      company: "ABC Inc.",
      testimonial:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Jane Smith",
      company: "XYZ Corp.",
      testimonial:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "David Johnson",
      company: "123 Co.",
      testimonial:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ];

  return (
    <section className=" py-16 w-[85%] mx-auto">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded shadow">
              <p className="text-gray-600 mb-4">{testimonial.testimonial}</p>
              <h3 className="text-lg font-bold">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonialsSection;
