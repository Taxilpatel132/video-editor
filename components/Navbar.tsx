import { Undo2, Redo2, Save, Download } from "lucide-react";
export default function Navbar() {
  return (
    <div className="w-full h-14 px-6 bg-white border-b flex items-center justify-between">
      <h1 className="text-xl font-semibold">Video Editor</h1>

      <div className="flex items-center gap-4">
        <button className="px-4 py-1.5 rounded-md bg-gray-200">Create</button>
        <button className="px-4 py-1.5 rounded-md bg-gray-200">Edit</button>
        <button className="px-4 py-1.5 rounded-md bg-blue-600 text-white">Export</button>
      </div>
      

<div className="flex items-center gap-3">

  {/* Existing Buttons (do NOT change) */}
  { /* your existing navbar items here */ }

  {/* ➕ Added Undo */}
  <button className="p-2 hover:bg-gray-800 rounded-lg transition" title="Undo">
    <Undo2 size={20} />
  </button>

  {/* ➕ Added Redo */}
  <button className="p-2 hover:bg-gray-800 rounded-lg transition" title="Redo">
    <Redo2 size={20} />
  </button>

  {/* ➕ Added Save */}
  <button className="p-2 bg-green-500 hover:bg-green-600 rounded-lg transition flex items-center gap-1" title="Save">
    <Save size={18} />
    Save
  </button>

  {/* ➕ Added Download */}
  <button className="p-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition flex items-center gap-1" title="Download">
    <Download size={18} />
    Download
  </button>

</div>

    </div>
  );
}
