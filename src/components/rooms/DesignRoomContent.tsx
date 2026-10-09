"use client";

const DESIGNS = [
  { title: "Mobile Banking UI", category: "UI/UX", color: "bg-blue-100 text-blue-600" },
  { title: "SaaS Dashboard", category: "Web App", color: "bg-purple-100 text-purple-600" },
  { title: "Brand Identity Pack", category: "Branding", color: "bg-orange-100 text-orange-600" },
  { title: "NFT Marketplace", category: "Web3", color: "bg-green-100 text-green-600" },
  { title: "Health Tracker App", category: "Mobile", color: "bg-red-100 text-red-600" },
  { title: "Portfolio Templates", category: "Templates", color: "bg-cyan-100 text-cyan-600" },
];

export default function DesignRoomContent() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">
        The design room showcases UI/UX work, branding, and visual design projects.
      </p>

      <div className="grid grid-cols-3 gap-3">
        {DESIGNS.map((design) => (
          <div
            key={design.title}
            className="group rounded-xl bg-gray-50 hover:bg-white p-4 hover:shadow-lg
                       border border-transparent hover:border-gray-200
                       transition-all duration-200 cursor-pointer text-center"
          >
            {/* Placeholder for design thumbnail */}
            <div className="w-full aspect-square rounded-lg bg-gradient-to-br from-gray-100 to-gray-200 mb-3 flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-2xl">🎨</span>
            </div>
            <h4 className="text-xs font-bold text-gray-800">{design.title}</h4>
            <span className={`inline-block mt-1 text-[10px] font-medium px-2 py-0.5 rounded-full ${design.color}`}>
              {design.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
