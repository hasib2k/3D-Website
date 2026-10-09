"use client";

const PROJECTS = [
  {
    title: "E-Commerce Platform",
    tech: "Next.js, Stripe, Prisma",
    desc: "Full-stack e-commerce solution with real-time inventory and payment processing.",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "AI Dashboard",
    tech: "React, Python, TensorFlow",
    desc: "Machine learning analytics dashboard with real-time data visualization.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Social Media App",
    tech: "React Native, Firebase",
    desc: "Cross-platform social app with real-time messaging and story features.",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "3D Portfolio Website",
    tech: "Three.js, React, GSAP",
    desc: "This very website — an immersive 3D office portfolio experience.",
    color: "from-green-500 to-teal-500",
  },
];

export default function WorkStudioContent() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        Here&apos;s a selection of projects from the studio. Each one pushed the
        boundaries of what&apos;s possible on the web.
      </p>

      <div className="grid grid-cols-2 gap-3">
        {PROJECTS.map((project) => (
          <div
            key={project.title}
            className="group rounded-xl border border-gray-100 hover:border-gray-200 p-4 hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <div
              className={`w-full h-2 rounded-full bg-gradient-to-r ${project.color} mb-3`}
            />
            <h4 className="text-sm font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h4>
            <p className="text-xs text-gray-500 mt-1">{project.desc}</p>
            <p className="text-xs text-blue-500 font-medium mt-2">
              {project.tech}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
