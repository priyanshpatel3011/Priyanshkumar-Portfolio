import React, { useState } from 'react';
import { Mail, Phone, MapPin, GraduationCap, Code, BarChart, Globe } from 'lucide-react';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('welcome');

  const skills = [
    {
      icon: <Code className="w-12 h-12 text-indigo-600" />,
      title: "Programming & Development",
      description: "Proficient in Python, Java, JavaScript, PHP, and Android development. Building robust applications with clean code.",
      image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=400&h=300&fit=crop"
    },
    {
      icon: <BarChart className="w-12 h-12 text-indigo-600" />,
      title: "Data Analysis & Visualization",
      description: "Experienced with Pandas, Excel, and statistical analysis. Turning data into actionable insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      icon: <Globe className="w-12 h-12 text-indigo-600" />,
      title: "Web Design & Development",
      description: "Creating responsive, modern websites using HTML, CSS, JavaScript, and modern frameworks.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
    }
  ];

  const projects = [
    {
      title: "Fusion Chat",
      description: "Real-time chat application with integrated movie streaming. Built with Java, Android Studio, Firebase, and TMDb API.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      tech: ["Java", "Android Studio", "Firebase", "TMDb API"]
    },
    {
      title: "Python Automation Tool",
      description: "Automated inventory tracking system using Python and Pandas. Reduced manual work by 60%.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
      tech: ["Python", "Pandas", "Excel", "Automation"]
    }
  ];

  const education = [
    {
      school: "University of Victoria",
      degree: "Master of Applied Data Science (MADS)",
      location: "Victoria, BC, Canada",
      date: "Expected: April 2026",
      description: "Specializing in data analysis, machine learning, and statistical computing. Developing expertise in Python, R, and advanced analytics techniques."
    },
    {
      school: "Indus University",
      degree: "Bachelor of Technology - Computer Science and Engineering",
      location: "Ahmedabad, India",
      date: "2020 - 2024",
      description: "Gained comprehensive knowledge in software development, algorithms, data structures, and web technologies. Completed capstone project on Android application development."
    }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=400&h=400&fit=crop",
    "https://images.unsplash.com/photo-1526947425960-945c6e72858f?w=400&h=400&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-50 to-indigo-200">
      {/* Header */}
      <header className="border-b-2 border-indigo-500 bg-gradient-to-br from-indigo-100 to-purple-100">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex justify-between items-center mb-6">
            <div className="text-sm text-indigo-700 font-medium tracking-wider">
              PRIYANSHKUMAR PATEL<br />PORTFOLIO
            </div>
            <a href="mailto:priyanshpatel0211@gmail.com" className="text-indigo-700 text-sm hover:text-indigo-900 transition">
              Get in Touch
            </a>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-indigo-900 leading-tight mb-4">
            PRIYANSH<br />GHANSHYAMBHAI<br />PATEL
          </h1>
          <span className="inline-block bg-indigo-600 text-white px-6 py-2 rounded-full text-sm">
            Section: Welcome
          </span>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Welcome Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-indigo-800 italic mb-4 text-lg">Tech Talent on Display</h3>
              <p className="text-indigo-900 text-lg leading-relaxed font-medium">
                Welcome to the portfolio of PriyanshKumar Patel — where innovation meets precision. 
                Explore projects that reflect technical expertise, creative problem-solving, and a 
                commitment to building impactful digital solutions.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop" 
                alt="Priyansh Patel" 
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <h2 className="text-5xl font-bold text-indigo-900 mb-8 border-b-2 border-indigo-500 pb-4">
            SKILLS
          </h2>
          <div className="grid md:grid-cols-3 gap-6 bg-white p-8 rounded-lg shadow-lg">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <img 
                  src={skill.image} 
                  alt={skill.title} 
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <div className="text-indigo-400 text-sm italic mb-2">[label] [Projects]</div>
                <h3 className="text-indigo-900 font-semibold text-lg mb-2">{skill.title}</h3>
                <p className="text-indigo-600 text-sm leading-relaxed">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className="text-5xl font-bold text-indigo-900 mb-4 border-b-2 border-indigo-500 pb-4">
            Key Projects
          </h2>
          <p className="text-indigo-700 mb-8 leading-relaxed">
            Welcome to my portfolio. Here you'll find a selection of my work. Explore my projects to learn more about what I do.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-indigo-900 font-semibold text-xl mb-3">{project.title}</h3>
                  <p className="text-indigo-600 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-16">
          <h2 className="text-5xl font-bold text-indigo-900 mb-8 border-b-2 border-indigo-500 pb-4">
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
                <GraduationCap className="w-12 h-12 text-indigo-600 mb-4" />
                <h3 className="text-indigo-900 font-bold text-2xl mb-2">{edu.school}</h3>
                <p className="text-indigo-700 font-medium text-lg mb-1">{edu.degree}</p>
                <p className="text-indigo-500 italic mb-1">{edu.location}</p>
                <p className="text-indigo-400 text-sm mb-4">{edu.date}</p>
                <p className="text-gray-600 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery Section */}
        <section className="mb-16">
          <h2 className="text-5xl font-bold text-indigo-900 mb-8 border-b-2 border-indigo-500 pb-4">
            Follow Me
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            {gallery.map((image, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg h-48 group">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`} 
                  className="w-full h-full object-cover transition transform group-hover:scale-110"
                />
              </div>
            ))}
          </div>
          <div className="text-center">
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded hover:bg-indigo-600 hover:text-white transition">
              Load More
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h2 className="text-5xl font-bold text-indigo-900 mb-6">Contact</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
            <div className="flex items-center gap-2 text-indigo-700">
              <MapPin className="w-5 h-5" />
              <span>Victoria, BC, Canada</span>
            </div>
            <div className="flex items-center gap-2 text-indigo-700">
              <Mail className="w-5 h-5" />
              <a href="mailto:priyanshpatel0211@gmail.com" className="hover:text-indigo-900">
                priyanshpatel0211@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-indigo-700">
              <Phone className="w-5 h-5" />
              <a href="tel:+12365016115" className="hover:text-indigo-900">
                +1 (236) 501-6115
              </a>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            Master of Applied Data Science (MADS) | University of Victoria
          </p>
        </section>
      </div>
    </div>
  );
}
