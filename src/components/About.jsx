import React from "react";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-shrink-0">
          <img
            src="/img/Profile.jpg"
            alt="Profile"
            className="w-80 h-96 object-cover border-8 border-white shadow-lg rounded-xl"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-crimson">Me</span>
          </h2>
          <p className="text-gray-700 mb-4">
            Hi, I'm Piyush Wattamwar, a passionate and ambitious full-stack web
            developer currently pursuing B.Tech in Information Technology at
            JSPM’s Rajarshi Shahu College of Engineering, Pune. I have a strong
            interest in building real-world applications and exploring the
            latest technologies that enhance user experience and functionality.
          </p>
          <p className="text-gray-700 mb-4">
            My expertise lies in the MERN stack (MongoDB, Express, React,
            Node.js), with a solid foundation in C++, DSA, and front-end
            technologies like HTML, CSS, Bootstrap, and Tailwind CSS. I’ve
            developed projects like NoteWise, an AI-powered notes and study app,
            along with other dynamic platforms like recipe finders, restaurant
            websites, and real estate listings.
          </p>
          <p className="text-gray-700 mb-4">
            Beyond academics, I actively participate in tech
            events such as Flipkart Grid,Ideathon and IBM
            Generative AI. I'm always excited to learn, collaborate,
            and contribute to impactful projects that solve real-world problems
            through tech.
          </p>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-crimson text-white rounded hover:bg-red-600"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
