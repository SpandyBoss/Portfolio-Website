import React, { useEffect, useState } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from a JSON file or an API endpoint
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json'); // Replace with your JSON file path or API endpoint
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">My Projects</h2>
        <div className="mt-10 grid gap-6 lg:grid-cols-1 lg:max-w-none">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center bg-white rounded-lg shadow-lg p-6 backdrop-filter backdrop-blur-lg bg-opacity-20"
            >
              <div className="flex-shrink-0">
                <img className="h-32 w-32 object-cover rounded" src={project.imageUrl} alt={project.title} />
              </div>
              <div className="ml-6 flex-1">
                <p className="text-2xl font-semibold text-gray-900">{project.title}</p>
                <p className="mt-2 text-base text-gray-500">{project.description}</p>
                <a
                  href={project.repoLink}
                  className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  View Repository
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
