const AcademicHistory = () => {
    const academics = [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "University of Liberal arts Bangladesh",
        year: "2018 - 2022",
        description: "Focused on web development, data structures, and algorithms.",
      },
      {
        degree: "Higher Secondary Certificate (HSC)",
        institution: "Dr. Mahbubur Rahman Mollah college 2015",
        year: "2013 - 2014",
        description: "Science major with strong foundation in mathematics and physics.",
      },
    //   {
    //     degree: "Purba kadamtoli islamia alim madrasah",
    //     institution: "DEF High School",
    //     year: "2011 - 2012",
    //     description: "Completed high school with excellent academic performance.",
    //   },
    ];
  
    return (
      <section id="academics" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Academic History
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {academics.map((item, index) => (
              <div
                key={index}
                className="p-6 border-l-4 border-indigo-500 bg-white rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm text-gray-600">{item.institution}</p>
                <p className="mt-1 text-sm text-indigo-600 font-medium">{item.year}</p>
                <p className="mt-2 text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default AcademicHistory;
  