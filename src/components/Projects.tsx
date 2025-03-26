import React from 'react';

export const Projects = () => {
  return (

    <div className="flex flex-col gap-8 p-6 mt-4 text-left border-zinc-500/50 border-4 border-double">
      {/* Projects Section */}
      <div className="flex flex-col gap-6">
        {/* Project 1: API Integration */}
        <div className="p-4 border rounded-lg shadow-md">
          <a
            href="https://example.com/api-integration"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-blue-500 hover:underline"
          >
            API Integration Project
          </a>
          <p className="text-gray-700">
            A project showcasing seamless integration with third-party APIs to fetch and display dynamic data.
          </p>
        </div>

        {/* Project 2: Web Design */}
        <div className="p-4 border rounded-lg shadow-md">
          <a
            href="https://example.com/web-design"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-blue-500 hover:underline"
          >
            Web Design Project
          </a>
          <p className="text-gray-700">
            A responsive and visually appealing website designed with modern UI/UX principles.
          </p>
        </div>

        {/* Project 3: Database Technologies */}
        <div className="p-4 border rounded-lg shadow-md">
          <a
            href="https://example.com/database-technologies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-semibold text-blue-500 hover:underline"
          >
            Database Technologies Project
          </a>
          <p className="text-gray-700">
            A project demonstrating the use of SQL and NoSQL databases for efficient data storage and retrieval.
          </p>
        </div>
      </div>
    </div>
  );
};