import {
    faCode,
    faLaptopCode,
    faServer,
    faDatabase,
    faLayerGroup,
    faStore,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  
  const Skills = () => {
    const skills = [
      {
        title: "Languages",
        items: "JavaScript, TypeScript, C, C++, Java",
        icon: faCode,
        color: "from-blue-500 to-indigo-500",
      },
      {
        title: "Frontend",
        items: "React, Tailwind CSS, ShadCN",
        icon: faLaptopCode,
        color: "from-purple-500 to-pink-500",
      },
      {
        title: "Backend",
        items: "Node.js, Express.js",
        icon: faServer,
        color: "from-green-500 to-emerald-500",
      },
      {
        title: "Database",
        items: "MongoDB, Mongoose, PostgreSQL",
        icon: faDatabase,
        color: "from-orange-500 to-amber-500",
      },
      {
        title: "State Management",
        items: "Redux Toolkit, Context API",
        icon: faLayerGroup,
        color: "from-cyan-500 to-sky-500",
      },
      {
        title: "E-commerce",
        items: "Shopify, Liquid, Integrations",
        icon: faStore,
        color: "from-rose-500 to-red-500",
      },
    ];
  
    return (
      <section id="skills" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  
          <h2 className="text-3xl font-bold mb-14 text-center">
            Technical Skills
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="group p-6 rounded-2xl bg-white border shadow-sm hover:shadow-xl transition duration-300"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition`}
                >
                  <FontAwesomeIcon icon={skill.icon} size="lg" />
                </div>
  
                {/* Text */}
                <h3 className="text-lg font-semibold mb-2">
                  {skill.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {skill.items}
                </p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Skills;
  