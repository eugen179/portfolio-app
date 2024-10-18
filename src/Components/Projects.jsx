import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'Project 1', description: 'My first Project', link: '#' },
    { name: 'Project 2', description: 'My second Project', link: '#' },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-4 shadow-md">
              <h3 className="text-2xl font-bold">{project.name}</h3>
              <p className="text-gray-700">{project.description}</p>
              <a href={project.link} className="text-indigo-500 hover:underline">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;