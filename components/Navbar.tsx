import { Undo2, Redo2, Save, Download } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full h-14 px-6 bg-[#0f1629] border-b border-[#5adaff]/20 flex items-center justify-between backdrop-blur-sm">
      <h1 className="text-xl font-semibold text-[#5adaff] tracking-wide font-mono">◆ AI Video Editor</h1>

      <div className="flex items-center gap-3">
        <button className="px-4 py-1.5 rounded-lg bg-[#1a1f35] text-white/80 hover:bg-[#5adaff]/10 hover:text-[#5adaff] transition-all border border-white/10 hover:border-[#5adaff]/40">
          Create
        </button>
        <button className="px-4 py-1.5 rounded-lg bg-[#1a1f35] text-white/80 hover:bg-[#ff5af1]/10 hover:text-[#ff5af1] transition-all border border-white/10 hover:border-[#ff5af1]/40">
          Edit
        </button>
        <button className="px-4 py-1.5 rounded-lg bg-[#5adaff]/20 text-[#5adaff] hover:bg-[#5adaff]/30 transition-all border border-[#5adaff]/40">
          Export
        </button>
      </div>
      
      <div className="flex items-center gap-2">
        {/* Undo */}
        <button className="p-2 hover:bg-[#5adaff]/10 hover:text-[#5adaff] rounded-xl transition-all" title="Undo">
          <Undo2 size={18} className="text-white/70" />
        </button>

        {/* Redo */}
        <button className="p-2 hover:bg-[#5adaff]/10 hover:text-[#5adaff] rounded-xl transition-all" title="Redo">
          <Redo2 size={18} className="text-white/70" />
        </button>

        {/* Save */}
        <button className="px-3 py-2 bg-[#ff5af1]/20 text-[#ff5af1] hover:bg-[#ff5af1]/30 rounded-xl transition-all flex items-center gap-1.5 border border-[#ff5af1]/30" title="Save">
          <Save size={16} />
          <span className="text-sm font-medium">Save</span>
        </button>

        {/* Download */}
        <button className="px-3 py-2 bg-[#5adaff]/20 text-[#5adaff] hover:bg-[#5adaff]/30 rounded-xl transition-all flex items-center gap-1.5 border border-[#5adaff]/30" title="Download">
          <Download size={16} />
          <span className="text-sm font-medium">Download</span>
        </button>
      </div>
    </div>
  );
}