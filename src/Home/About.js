import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block mb-4 px-4 py-1 text-sm font-medium rounded-full bg-primary/10 text-primary">
            About Me
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Crafting <span className="text-primary">Modern</span> &{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
              Impactful
            </span>{" "}
            Web Experiences
          </h2>

          <p className="mt-8 text-gray-600 leading-relaxed text-sm sm:text-base">
            I am a{" "}
            <span className="font-semibold text-gray-900">
              Web Developer & Designer
            </span>{" "}
            who is deeply passionate about building high-quality web
            applications. I focus on creating{" "}
            <span className="font-semibold text-primary">
              elegant, scalable, and user-first
            </span>{" "}
            solutions that deliver real business value.
            <br />
            <br />
            I’ve worked with multiple clients and teams, consistently delivering
            projects on time and within budget—always aligned with client goals
            and expectations.
          </p>
        </div>

        {/* Colorful Highlights */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Clean & Scalable Code",
              desc: "Maintainable architecture with performance and scalability in mind.",
              gradient: "from-blue-500 to-indigo-500",
            },
            {
              title: "Client-Centered Mindset",
              desc: "Strong communication, requirement analysis, and delivery focus.",
              gradient: "from-emerald-500 to-teal-500",
            },
            {
              title: "Modern Tech Stack",
              desc: "MERN Stack, Shopify, Tailwind CSS, Redux Toolkit, and more.",
              gradient: "from-purple-500 to-pink-500",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition group"
            >
              {/* Gradient Bar */}
              <div
                className={`absolute inset-x-0 top-0 h-1 rounded-t-2xl bg-gradient-to-r ${item.gradient}`}
              />

              <h3 className="mt-4 font-semibold text-lg group-hover:text-primary transition">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
