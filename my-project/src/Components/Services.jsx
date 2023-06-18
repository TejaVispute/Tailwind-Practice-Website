import React from "react";

const ServicesSection = () => {
  const services = [
    {
      title: "Service 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "https://www.achieversit.com/uploads/course_image/web-dev-img.jpeg",
    },
    {
      title: "Service 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "https://www.achieversit.com/uploads/course_image/web-dev-img.jpeg",
    },
    {
      title: "Service 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: "https://www.achieversit.com/uploads/course_image/web-dev-img.jpeg",
    },
  ];

  return (
    <section className="py-2 md:py-20 w-[85%] mx-auto">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded shadow">
              <img
                className="w-16 h-16 mx-auto mb-4"
                src={service.icon}
                alt={service.title}
              />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
