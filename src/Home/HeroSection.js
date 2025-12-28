const HeroSection = () => {
    return (
      <section className="relative py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
  
          {/* Left */}
          <div>
            <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
              MERN STACK DEVELOPER
            </p>
  
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900">
              Building modern web<br />
              <span className="text-indigo-600">experiences</span>
            </h1>
  
            <p className="mt-6 text-gray-600 max-w-lg">
              I help companies and startups build scalable, high-performance
              web applications using the MERN stack and Shopify.
            </p>
  
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
              >
                Contact
              </a>
            </div>
          </div>
  
          {/* Right */}
          <div className="hidden lg:block relative">
            <div className="w-full max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl transform hover:scale-105 transition">
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQGpo7InEYAkXQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729055155601?e=1768435200&v=beta&t=L71ykF_Ky-Yhbexe204EH9s1ZZNdSC3jjYFgz1xvN7k"
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-indigo-100/10 rounded-2xl pointer-events-none"></div>
            </div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  