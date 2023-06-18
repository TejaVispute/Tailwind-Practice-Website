import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image:
        "https://www.achieversit.com/uploads/course_image/web-dev-img.jpeg",
    },
    {
      title: "Project 2",
      description: "Sed quis tellus in diam lobortis elementum.",
      image:
        "https://www.achieversit.com/uploads/course_image/web-dev-img.jpeg",
    },
    {
      title: "Project 3",
      description: "Mauris venenatis velit eget sapien viverra.",
      image:
        "https://www.achieversit.com/uploads/course_image/web-dev-img.jpeg",
    },
  ];

  return (
    <section className="py-10 bg-slate-800">
      <div className="container mx-auto px-4 w-[85%] ">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">
          Projects We Have Done
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
