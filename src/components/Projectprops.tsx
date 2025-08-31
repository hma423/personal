import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
}

const ProjectBlock: React.FC<ProjectProps> = ({ title, description, technologies }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-gray-600 text-2xl font-bold mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4" dangerouslySetInnerHTML={{ __html: description }}></p>      <div className="flex flex-wrap justify-center">
        {technologies.map((tech, index) => (
          <span key={index} className="justify-center bg-blue-100 text-blue-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

const ProjectHighlight: React.FC = () => {
  const projects = [
    {
      title: "GroupVotes",
      description: "Created a web application that helped with the planning of group events for friend groups. Firebase was used for backend services which handled features like our voting system",
      technologies: ["react", "vite", "javascript", "tailwind", "firebase", "agile"],
    },
    {
      title: "Correkt",
      description: "Helped create a fact checking chrome extension. I helped with collecting data from news sites, setting up an auto scraper on a google cloud instance. Later on, fine-tuned a BERT model to differentiate statements and opinions. Since then, we have changed our directions to an AI Search engine: <a href='https://app.correkt.ai' target='_blank' rel='noopener noreferrer'>app.correkt.ai</a>.",
      technologies: ["python", "google cloud", "machine learning", "datasets"],
    },

    {
      title: "Climate Fund",
      description: "Created a form on an existing website under Professor Easterday. The form collected the information about the donor and after submission, automatically handled posting the donation shoutout to the Climate Fund mitigating the need to post manually.",
      technologies: ["typescript", "material ui", "firebase", "agile"],
    },
  ];

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectBlock key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectHighlight;