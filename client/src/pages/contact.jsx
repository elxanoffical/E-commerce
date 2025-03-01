import React from "react";
import emailjs from "@emailjs/browser";
const ContactPage = () => {
  const HandleSubmit = async (e) => {
    e.preventDefault();

    const res = await emailjs.sendForm(
      "service_u4vmdar", // service ID
      "template_mg7hj5e", // template ID
      e.target,
      "Kba6m4BVFNbdasMZC" //public ID
    );

    if (res.status === 200) {
      alert("Email sent succesfully!");
    } else {
      alert("Email failed to send");
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 border border-neutral-400 rounded-md dark:border-white bg-white dark:bg-black">
        <h1 className="text-3xl font-bold text-black dark:text-white text-center mb-6">
          Contact Us
        </h1>
        <form onSubmit={HandleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-black dark:text-white mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Your Name"
              className="w-full p-2 border border-neutral-400 dark:border-white bg-white dark:bg-black text-black dark:text-white focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-black dark:text-white mb-2"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full p-2 border border-neutral-400 dark:border-white bg-white dark:bg-black text-black dark:text-white focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-black dark:text-white mb-2"
            >
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              className="w-full p-2 border border-neutral-400 dark:border-white bg-white dark:bg-black text-black dark:text-white focus:outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-300 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
