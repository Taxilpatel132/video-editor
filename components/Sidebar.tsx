interface SidebarProps {
  onSelectTool: (tool: string | null) => void;
}

export default function Sidebar({ onSelectTool }: SidebarProps) {
  return (
    <div className="w-64 h-full bg-[#0f1629] border-r border-[#5adaff]/20 p-4">
      <h2 className="text-lg font-semibold text-[#5adaff] mb-1 font-mono tracking-wide">▸ TOOLS</h2>
      <p className="text-sm text-white/60 mb-6 font-mono">SELECT_MODULE.EXE</p>

      <ul className="space-y-2">
        <li
          onClick={() => onSelectTool("video")}
          className="p-3 bg-[#1a1f35] rounded-xl hover:bg-[#5adaff]/10 cursor-pointer transition-all border border-white/10 hover:border-[#5adaff]/40 group"
        >
          <div className="text-white font-medium group-hover:text-[#5adaff] tracking-wide">Video</div>
          <div className="text-xs text-white/50 mt-1">Upload & edit videos</div>
        </li>

        <li
          onClick={() => onSelectTool("audio")}
          className="p-3 bg-[#1a1f35] rounded-xl hover:bg-[#5adaff]/10 cursor-pointer transition-all border border-white/10 hover:border-[#5adaff]/40 group"
        >
          <div className="text-white font-medium group-hover:text-[#5adaff] tracking-wide">Audio</div>
          <div className="text-xs text-white/50 mt-1">Sound & music</div>
        </li>

        <li
          onClick={() => onSelectTool("image")}
          className="p-3 bg-[#1a1f35] rounded-xl hover:bg-[#ff5af1]/10 cursor-pointer transition-all border border-white/10 hover:border-[#ff5af1]/40 group"
        >
          <div className="text-white font-medium group-hover:text-[#ff5af1] tracking-wide">Image</div>
          <div className="text-xs text-white/50 mt-1">Photos & graphics</div>
        </li>

        <li
          onClick={() => onSelectTool("text")}
          className="p-3 bg-[#1a1f35] rounded-xl hover:bg-[#ff5af1]/10 cursor-pointer transition-all border border-white/10 hover:border-[#ff5af1]/40 group"
        >
          <div className="text-white font-medium group-hover:text-[#ff5af1] tracking-wide">Text</div>
          <div className="text-xs text-white/50 mt-1">Titles & captions</div>
        </li>
      </ul>
    </div>
  );
}