const Projects = () => {
    return (
      <section id="projects" className="py-24 bg-gradient-to-b from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  
          <h2 className="text-4xl font-bold mb-12 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            Selected Projects
          </h2>
  
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  
            <div className="p-6 border-2 border-purple-400 rounded-xl hover:shadow-xl transition duration-300 bg-white hover:bg-purple-50">
              <h3 className="font-semibold text-xl text-purple-700">
                PeakRoute – Travel Management System
              </h3>
              <p className="mt-3 text-sm text-gray-700">
                Full-stack MERN application with authentication, payments,
                admin dashboard, and role-based access.
              </p>
              <a
                href="https://resilient-alpaca-f87ec9.netlify.app/"
                className="inline-block mt-4 text-white font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition"
              >
                View Project →
              </a>
            </div>
  
            <div className="p-6 border-2 border-pink-400 rounded-xl hover:shadow-xl transition duration-300 bg-white hover:bg-pink-50">
              <h3 className="font-semibold text-xl text-pink-700">
                Shopify E-commerce Stores
              </h3>
              <p className="mt-3 text-sm text-gray-700">
                Custom Shopify themes with optimized UX and performance.
              </p>
              <a
                href="https://n5vmbf-ts.myshopify.com/"
                className="inline-block mt-4 text-white font-medium px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-red-500 hover:from-red-500 hover:to-pink-500 transition"
              >
                View Stores →
              </a>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Projects;
  