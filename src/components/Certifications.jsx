import React from "react";

const certifications = [
  {
    title: "Flipkart Grid 6.0 - National Level Competition",
    issuer: "Flipkart",
    year: "2024",
    certificateLink: "#",
  },
  {
    title: "Google Cloud Study Jam",
    issuer: "Google Developers",
    year: "2024",
    certificateLink: "#",
  },
  {
    title: "IBM Generative AI Hackathon",
    issuer: "IBM SkillsBuild",
    year: "2024",
    certificateLink: "#",
  },
  {
    title: "Introduction to Data Structures in C++",
    issuer: "Coding Ninjas",
    year: "2023",
    certificateLink: "#",
  },
  {
    title: "MongoDB Basics",
    issuer: "MongoDB University",
    year: "2023",
    certificateLink: "#",
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          📜 <span className="text-crimson">Certifications</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="border-l-4 border-crimson bg-gray-50 p-6 rounded-md shadow hover:shadow-md transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {cert.title}
              </h3>
              <p className="text-gray-600">
                {cert.issuer} &mdash;{" "}
                <span className="italic">{cert.year}</span>
              </p>
              <a
                href={cert.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-crimson hover:underline"
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
