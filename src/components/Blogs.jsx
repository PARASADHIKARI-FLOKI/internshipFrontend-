import React, { useState, useEffect } from "react";
import images from "../assets/images.jpg";

const blogs = [
  {
    id: 1,
    title: "Message from Our CEO Er. Himal Rawal",
    text: "Dear valued clients, As the CEO of our IT training and development company,I am honored to serve you..",
    content:
      "Dear valued clients,\n\nAs the CEO of our IT training and development company, I am honored to serve you and help you achieve your goals in the field of information technology. At Sipalaya Info Tech, we are committed to providing the highest quality training and development services to our clients. Whether you are an individual looking to improve your skills or a business seeking to expand your team’s expertise, we have the resources and expertise to help you succeed.\n\nI believe that our company’s success is built on strong relationships with our clients. We are dedicated to providing personalized support and guidance to help you achieve your goals, and we are always here to listen to your needs and concerns.\n\nThank you for choosing Sipalaya Info Tech as your partner in IT training and development. We look forward to working with you and helping you succeed in your endeavors.\n\nSincerely,\n\nEr. Himal Rawal\n\nCEO, Sipalaya Info Tech Pvt. Ltd.\n\nFor More Information:-\n\nPhone\n\n+9779818968546\n\nEmail\n\ninfotech@sipalaya.com / sipalayainfotech01@gmail.com\n\nAddress:\n\nNearby Koteshwor Bhat-Bhateni, Kathmandu\n\nThank you",
    image: images,
    date: "10/01/2023",
  },
];

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    document.title = selectedBlog ? selectedBlog.title : "Latest Blog Posts";
  }, [selectedBlog]);

  return (
    <div className=" bg-white container mx-auto px-4 py-8 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-center">Blogs By Sipalaya</h1>
      {selectedBlog ? (
        <div className=" bg-white shadow-lg rounded p-6 transition-opacity duration-500 ease-in-out">
          <h2 className="text-5xl  font-semibold mb-3 text-center">
            {selectedBlog.title}
          </h2>
          <h2 className="mb-5 text-center">{selectedBlog.date}</h2>
          <img
            src={selectedBlog.image}
            alt=""
            className="w-[1000px] h-[750px] object-cover rounded-lg ml-60"
          />
          <p className="mt-20 text-gray-700 text-[17px] whitespace-pre-line">
            {selectedBlog.content}
          </p>
          <p
            onClick={() => setSelectedBlog(null)}
            className="mb-4 text-blue-500 hover:text-blue-700 text-end cursor-pointer text-[18px]"
          >
            ← Back
          </p>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="grid md:grid-cols-2 gap-6 bg-white shadow-lg rounded-lg p-6 w-full max-w-screen-lg relative">
            <div className="flex flex-col items-center md:items-end text-right p-4 mt-44">
              <h2 className="text-2xl font-semibold text-blue-400">
                Message from Our CEO Er. Himal Rawal
              </h2>
              <p className="text-gray-500 mr-40">10/01/2023</p>
            </div>
            <div>
              {blogs.map((blog) => (
                <div key={blog.id} className="overflow-hidden rounded-lg">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-[420px] object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="mt-4">{blog.text}</p>
                    <button
                      className="mb-4 text-blue-500 hover:text-blue-700 cursor-pointer"
                      onClick={() => setSelectedBlog(blog)}
                    >
                      Read More →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs;
