import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact <span className="text-crimson">Info</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <img
              src="https://img.icons8.com/bubbles/100/000000/phone.png"
              className="mx-auto mb-2"
            />
            <h3 className="font-semibold text-xl">Phone</h3>
            <p className="text-gray-600">+91 9405356704</p>
          </div>
          <div>
            <img
              src="https://img.icons8.com/bubbles/100/000000/new-post.png"
              className="mx-auto mb-2"
            />
            <h3 className="font-semibold text-xl">Email</h3>
            <p className="text-gray-600">piyush31wattamwar@gmail.com</p>
          </div>
          <div>
            <img
              src="https://img.icons8.com/bubbles/100/000000/map-marker.png"
              className="mx-auto mb-2"
            />
            <h3 className="font-semibold text-xl">Location</h3>
            <p className="text-gray-600">Pune, India</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
