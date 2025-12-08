interface SidebarProps {
  onSelectTool: (tool: string | null) => void;
}

export default function Sidebar({ onSelectTool }: SidebarProps) {
  return (
    <div className="w-64 h-full border-r bg-gray-50 p-4">
      <h2 className="text-lg font-semibold">Tools</h2>

      <ul className="mt-4 space-y-3">
        <li
          onClick={() => onSelectTool("video")}
          className="p-3 bg-white rounded hover:bg-gray-100 cursor-pointer"
        >
          Video
        </li>

        <li
          onClick={() => onSelectTool("audio")}
          className="p-3 bg-white rounded hover:bg-gray-100 cursor-pointer"
        >
          Audio
        </li>

        <li
          onClick={() => onSelectTool("image")}
          className="p-3 bg-white rounded hover:bg-gray-100 cursor-pointer"
        >
          Image
        </li>

        <li
          onClick={() => onSelectTool("text")}
          className="p-3 bg-white rounded hover:bg-gray-100 cursor-pointer"
        >
          Text
        </li>
      </ul>
    </div>
  );
}
