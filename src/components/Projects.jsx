import React from "react";

const projects = [
  {
    title: "📝 NoteWise — Smart AI-Powered Notes and Study App",
    description:
      "NoteWise is a full-stack MERN app that lets users create, organize, and manage notes with smart AI features like title suggestion, auto-categorization, summarization, and MCQ-based test generation.",
    img: "/img/img-5.png",
    liveLink: "https://notewise-frontend.onrender.com/",
    codeLink: "https://github.com/piyushwattamwar/NoteWise",
  },
  {
    title: "🧠 Smart Diabetes Predictor — ML Health App",
    description:
      "Smart Diabetes Predictor is an interactive web app built with Streamlit and machine learning. It predicts diabetes risk using medical parameters like BMI, glucose, and blood pressure. Features include multi-language support, voice input/output, dark mode, charts, and a model trained with Logistic Regression, Random Forest, and XGBoost — optimized using SMOTE.",
    img: "/img/img-3.png",
    liveLink: "https://smart-diabetes-prediction.streamlit.app/",
    codeLink: "https://github.com/piyushwattamwar/Smart-Diabetes-Prediction",
  },
  {
    title: "🍽️ Recipe Finder — Meal Discovery Web App",
    description:
      "Recipe Finder is a responsive web app built with HTML, CSS, and JavaScript, allowing users to search, filter, and explore recipes using the MealDB API. It offers real-time meal info, detailed recipes, and works perfectly across all devices.",
    img: "/img/img-4.png",
    liveLink: "https://piyushwattamwar.github.io/Recipe-Finder-/",
    codeLink: "https://github.com/piyushwattamwar/Recipe-Finder-",
  },

  {
    title: "Swadisht – Restaurant Website(UI)",
    description:
      "Swadisht is a responsive food restaurant website built with HTML, CSS, and Bootstrap 5, showcasing the menu, about section, contact info, and a reservation form. Designed for a smooth user experience across all devices.",
    img: "/img/img-6.png",
    liveLink: "https://piyushwattamwar.github.io/Restaurant_Website/",
    codeLink: "https://github.com/piyushwattamwar/Restaurant_Website",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Recent <span className="text-crimson">Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow overflow-hidden flex flex-col"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-700 mb-4">{project.description}</p>
                </div>
                <div className="mt-4 flex gap-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-crimson text-crimson font-medium rounded hover:bg-crimson hover:text-white bg-red-600 transition duration-300"
                  >
                    View Project
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-2 border border-crimson text-crimson font-medium rounded hover:bg-crimson hover:text-white transition duration-300"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
