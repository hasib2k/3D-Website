"use client";

import { useGameStore, type RoomId } from "@/store/gameStore";

// ── SVG Icon Components ────────────────────────────────────────────

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
      <path d="M2 12h20" />
      <path d="M12 12v3" />
    </svg>
  );
}

function CodeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  );
}

function PenToolIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function CompassIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  );
}

function HeadphonesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5z" />
      <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5z" />
    </svg>
  );
}

function ChevronRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

// ── Options config ─────────────────────────────────────────────────

const OPTIONS: {
  id: RoomId | "exploring";
  label: string;
  desc: string;
  icon: React.FC<{ className?: string }>;
  iconBg: string;
  iconColor: string;
  hoverBorder: string;
  hoverBg: string;
}[] = [
  {
    id: "boss-cabin",
    label: "Boss Cabin",
    desc: "Meet the CEO — About Me",
    icon: BriefcaseIcon,
    iconBg: "bg-indigo-50",
    iconColor: "text-indigo-500",
    hoverBorder: "hover:border-indigo-200",
    hoverBg: "hover:bg-indigo-50/50",
  },
  {
    id: "work-studio",
    label: "Work Studio",
    desc: "See my projects & code",
    icon: CodeIcon,
    iconBg: "bg-sky-50",
    iconColor: "text-sky-500",
    hoverBorder: "hover:border-sky-200",
    hoverBg: "hover:bg-sky-50/50",
  },
  {
    id: "design-room",
    label: "Design Room",
    desc: "UI/UX & design portfolio",
    icon: PenToolIcon,
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
    hoverBorder: "hover:border-rose-200",
    hoverBg: "hover:bg-rose-50/50",
  },
  {
    id: "meeting-room",
    label: "Meeting Room",
    desc: "Get in touch — Contact",
    icon: UsersIcon,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-500",
    hoverBorder: "hover:border-emerald-200",
    hoverBg: "hover:bg-emerald-50/50",
  },
  {
    id: "exploring",
    label: "Just Exploring",
    desc: "Look around the office",
    icon: CompassIcon,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    hoverBorder: "hover:border-amber-200",
    hoverBg: "hover:bg-amber-50/50",
  },
];

// ── Component ──────────────────────────────────────────────────────

export default function ReceptionDialog() {
  const { dialogOpen, setDialogOpen, setTargetRoom, setPhase } = useGameStore();

  if (!dialogOpen) return null;

  const handleSelect = (id: RoomId | "exploring") => {
    setDialogOpen(false);

    if (id === "exploring") {
      setPhase("exploring");
    } else {
      setTargetRoom(id);
      setPhase("walking-to-room");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-md" />

      {/* Dialog card */}
      <div className="relative bg-white rounded-[28px] shadow-2xl max-w-[420px] w-full mx-4 animate-in fade-in zoom-in duration-300 overflow-hidden">
        {/* Header with gradient accent */}
        <div className="relative px-7 pt-7 pb-5">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500" />

          <div className="flex items-center gap-4">
            {/* Receptionist avatar */}
            <div className="relative">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <HeadphonesIcon className="w-7 h-7 text-white" />
              </div>
              {/* Online dot */}
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-emerald-400 rounded-full border-2 border-white" />
            </div>
            <div>
              <p className="text-[11px] font-semibold text-orange-500 uppercase tracking-[0.1em]">
                Receptionist
              </p>
              <p className="text-gray-900 font-bold text-xl leading-tight mt-0.5">
                How can I help you?
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mx-7 h-px bg-gray-100" />

        {/* Options list */}
        <div className="p-3 space-y-1">
          {OPTIONS.map((opt) => {
            const Icon = opt.icon;
            return (
              <button
                key={opt.id}
                onClick={() => handleSelect(opt.id)}
                className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-2xl
                           bg-white ${opt.hoverBg}
                           border border-transparent ${opt.hoverBorder}
                           transition-all duration-200 group text-left
                           hover:shadow-sm active:scale-[0.98]`}
              >
                {/* Icon container */}
                <div
                  className={`w-11 h-11 rounded-xl ${opt.iconBg} flex items-center justify-center
                             group-hover:scale-110 transition-transform duration-200 shrink-0`}
                >
                  <Icon className={`w-5 h-5 ${opt.iconColor}`} />
                </div>

                {/* Text */}
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-gray-800 text-[13px] leading-tight">
                    {opt.label}
                  </p>
                  <p className="text-[11px] text-gray-400 mt-0.5 leading-tight">
                    {opt.desc}
                  </p>
                </div>

                {/* Arrow */}
                <ChevronRightIcon
                  className="w-4 h-4 text-gray-200 group-hover:text-gray-400
                             group-hover:translate-x-0.5 transition-all duration-200 shrink-0"
                />
              </button>
            );
          })}
        </div>

        {/* Footer hint */}
        <div className="px-7 pb-5 pt-2">
          <p className="text-[10px] text-gray-300 text-center tracking-wide">
            Select a destination to begin your tour
          </p>
        </div>
      </div>
    </div>
  );
}
