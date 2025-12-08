"use client";

import { Upload, Sparkle, ChevronRight, X, Trash2 } from "lucide-react";

interface Props {
  selectedTool: string | null;
  onClose: () => void;
  onUploadFile: (file: File | null) => void;
  hasVideo?: boolean;
  onRemoveVideo?: () => void;
}

export default function ToolPanel({
  selectedTool,
  onClose,
  onUploadFile,
  hasVideo = false,
  onRemoveVideo,
}: Props) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (!file) return;
    if (!file.type.startsWith("video/")) {
      alert("Please upload a video file.");
      return;
    }
    onUploadFile(file);
    e.currentTarget.value = "";
  };

  if (!selectedTool) return null;

  return (
    <div className="w-80 h-full bg-white border-l border-gray-200 shadow-lg p-4 overflow-y-auto relative">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-gray-500 hover:text-black"
        aria-label="Close panel"
      >
        <X size={20} />
      </button>

      <h1 className="text-xl font-semibold mb-6 capitalize">{selectedTool}</h1>

      {selectedTool === "video" && (
        <div className="space-y-6">
          {/* Upload */}
          <label
            htmlFor="video-upload"
            className="w-full flex items-center gap-3 cursor-pointer bg-gray-100 p-3 rounded-xl hover:bg-gray-200"
          >
            <input
              id="video-upload"
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="p-2 bg-white rounded-lg border">
              <Upload size={20} />
            </div>
            <span className="font-medium">Upload Video</span>
          </label>

          {/* Generate + Upload UI */}
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-xl">
              <Sparkle size={18} />
              Generate
            </button>
            <button className="flex items-center gap-2 px-5 py-3 bg-gray-100 rounded-xl hover:bg-gray-200">
              <Upload size={18} />
              Upload
            </button>
          </div>

          {/* Remove button shown when a video is present */}
          {hasVideo && onRemoveVideo && (
            <div className="pt-2 border-t border-gray-100">
              <button
                onClick={onRemoveVideo}
                className="mt-3 w-full flex items-center justify-center gap-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100"
                title="Remove uploaded video"
              >
                <Trash2 size={16} />
                Remove Video
              </button>
            </div>
          )}

          {/* Placeholders */}
          <div>
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold">Talking Characters</h2>
              <button className="text-sm flex items-center gap-1 text-gray-500 hover:text-black">
                View all <ChevronRight size={16} />
              </button>
            </div>
            <div className="flex gap-3 overflow-x-auto">
              <div className="w-28 h-28 rounded-xl bg-gray-200 flex-shrink-0" />
              <div className="w-28 h-28 rounded-xl bg-gray-200 flex-shrink-0" />
              <div className="w-28 h-28 rounded-xl bg-gray-200 flex-shrink-0" />
            </div>
          </div>
        </div>
      )}

      {selectedTool !== "video" && (
        <p className="text-gray-500">Tools for {selectedTool} coming soon…</p>
      )}
    </div>
  );
}
