export default function Skills() {
    const skills = [
      "HTML & CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Tailwind CSS",
      "Blockchain",
    ];
  
    return (
      <section id="skills" className="bg-black text-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-4xl font-semibold mb-4">
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Skill Set
            </span>
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            Technologies and tools I enjoy working with:
          </p>
  
          {/* Rectangle grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 shadow-lg rounded-xl p-6 hover:scale-105 transition duration-300"
              >
                <p className="text-lg font-medium text-white text-center">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  