export default function Timeline() {
  return (
    <div className="w-full h-40 border-t border-[#5adaff]/20 bg-[#0f1629] p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium text-[#5adaff] font-mono tracking-wide">▸ TIMELINE.SYS</h3>
        <div className="flex items-center gap-2">
          <button className="text-xs px-2 py-1 bg-[#1a1f35] text-[#5adaff] rounded hover:bg-[#5adaff]/20 transition-all border border-[#5adaff]/50 font-mono">
            00:00:00
          </button>
        </div>
      </div>

      <div className="w-full h-20 bg-[#1a1f35] rounded-xl flex items-center justify-center border border-[#5adaff]/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#5adaff]/5 to-transparent"></div>
        <p className="text-white/60 text-sm tracking-wider relative z-10">Video & Audio Tracks</p>
      </div>
    </div>
  );
}