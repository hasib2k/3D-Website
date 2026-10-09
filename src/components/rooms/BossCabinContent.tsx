"use client";

export default function BossCabinContent() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-3xl shadow-lg">
          👔
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">Hasib Ahmed</h3>
          <p className="text-sm text-gray-500">Creative Developer & Designer</p>
        </div>
      </div>

      <p className="text-gray-600 text-sm leading-relaxed">
        Welcome to my office! I&apos;m a passionate full-stack developer and designer
        who loves building immersive web experiences. With expertise in React,
        Three.js, and modern web technologies, I craft digital experiences that
        stand out.
      </p>

      <div className="grid grid-cols-3 gap-3">
        {[
          { label: "Experience", value: "5+ Years" },
          { label: "Projects", value: "50+" },
          { label: "Clients", value: "30+" },
        ].map((stat) => (
          <div key={stat.label} className="bg-blue-50 rounded-xl p-3 text-center">
            <p className="text-lg font-bold text-blue-600">{stat.value}</p>
            <p className="text-xs text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div>
        <h4 className="text-sm font-semibold text-gray-700 mb-2">Skills</h4>
        <div className="flex flex-wrap gap-2">
          {["React", "Next.js", "Three.js", "TypeScript", "Node.js", "Figma", "Tailwind CSS", "GSAP"].map(
            (skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>
    </div>
  );
}
