interface ToolPanelProps {
  selectedTool: string | null;
  onClose: () => void;
}

export default function ToolPanel({ selectedTool, onClose }: ToolPanelProps) {
  if (!selectedTool) return null;

  return (
    <div className="w-80 h-full bg-white border-l shadow-lg p-4 flex flex-col">
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold capitalize">{selectedTool} Tools</h2>
        <button
          onClick={onClose}
          className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
        >
          Close
        </button>
      </div>

      {/* TOOL CONTENT */}
      {selectedTool === "video" && (
        <div className="space-y-3">
          <p className="text-gray-700">• Upload Video</p>
          <p className="text-gray-700">• Stock Videos</p>
          <p className="text-gray-700">• Trim / Cut Tools</p>
        </div>
      )}

      {selectedTool === "audio" && (
        <div className="space-y-3">
          <p className="text-gray-700">• Upload Audio</p>
          <p className="text-gray-700">• Music Library</p>
          <p className="text-gray-700">• Clean Audio</p>
        </div>
      )}

      {selectedTool === "image" && (
        <div className="space-y-3">
          <p className="text-gray-700">• Upload Image</p>
          <p className="text-gray-700">• Stock Images</p>
          <p className="text-gray-700">• Background Remove</p>
        </div>
      )}

      {selectedTool === "text" && (
        <div className="space-y-3">
          <p className="text-gray-700">• Add Title</p>
          <p className="text-gray-700">• Subtitles</p>
          <p className="text-gray-700">• Fonts</p>
        </div>
      )}
    </div>
  );
}
