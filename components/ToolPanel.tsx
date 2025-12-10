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
    <div className="w-80 h-full bg-[#0f1629] border-l border-[#5adaff]/20 p-4 overflow-y-auto relative">
      <button
        onClick={onClose}
        className="absolute right-4 top-4 text-white/60 hover:text-[#ff5af1] transition-all hover:neon-glow-pink"
        aria-label="Close panel"
      >
        <X size={20} />
      </button>

      <h1 className="text-xl font-semibold mb-2 capitalize text-[#5adaff] tracking-wide">{selectedTool}</h1>
      <p className="text-sm text-white/60 mb-6">Manage your {selectedTool} content</p>

      {selectedTool === "video" && (
        <div className="space-y-6">
          {/* Upload */}
          <label
            htmlFor="video-upload"
            className="w-full flex items-center gap-3 cursor-pointer bg-[#1a1f35] p-4 rounded-xl hover:bg-[#5adaff]/10 transition-all border border-white/10 hover:border-[#5adaff]/40 group"
          >
            <input
              id="video-upload"
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="p-2 bg-[#5adaff]/20 rounded-xl group-hover:bg-[#5adaff]/30 transition-all border border-[#5adaff]/40">
              <Upload size={20} className="text-[#5adaff]" />
            </div>
            <div>
              <span className="font-medium text-white block tracking-wide">Upload Video</span>
              <span className="text-xs text-white/50">MP4, MOV, AVI supported</span>
            </div>
          </label>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex flex-col items-center gap-2 p-4 bg-gradient-to-br from-[#5adaff]/20 to-[#ff5af1]/20 text-white rounded-xl hover:from-[#5adaff]/30 hover:to-[#ff5af1]/30 transition-all border border-white/10">
              <Sparkle size={20} />
              <span className="text-sm font-medium">Generate</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 bg-[#1a1f35] text-white rounded-xl hover:bg-[#ff5af1]/10 border border-white/10 hover:border-[#ff5af1]/40 transition-all">
              <Upload size={20} />
              <span className="text-sm font-medium">Upload</span>
            </button>
          </div>

          {/* Remove Video */}
          {hasVideo && onRemoveVideo && (
            <div className="pt-4 border-t border-white/10">
              <button
                onClick={onRemoveVideo}
                className="w-full flex items-center justify-center gap-2 p-3 bg-[#ff5af1]/10 text-[#ff5af1] rounded-xl hover:bg-[#ff5af1]/20 border border-[#ff5af1]/30 transition-all"
                title="Remove uploaded video"
              >
                <Trash2 size={16} />
                Remove Video
              </button>
            </div>
          )}

          {/* Talking Characters */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-[#ff5af1] tracking-wide">AI Avatars</h2>
              <button className="text-sm flex items-center gap-1 text-[#5adaff] hover:text-[#5adaff]/80 transition-all">
                View all <ChevronRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[1, 2, 3].map((i) => (
                <div 
                  key={i}
                  className="aspect-square rounded-2xl bg-gradient-to-br from-[#1a1f35] to-[#0f1629] border border-white/10 hover:border-[#5adaff]/40 transition-all cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5adaff]/5 to-[#ff5af1]/5 opacity-0 hover:opacity-100 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/30 text-xs">AI {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedTool !== "video" && (
        <div className="text-center py-12">
          <p className="text-[#5adaff] text-lg tracking-wide">Tools for {selectedTool}</p>
          <p className="text-white/50 text-sm mt-2">Coming soon...</p>
          <div className="mt-4 w-full bg-[#1a1f35] rounded-full h-2">
            <div className="bg-gradient-to-r from-[#5adaff] to-[#ff5af1] h-2 rounded-full animate-pulse w-[30%]"></div>
          </div>
        </div>
      )}
    </div>
  );
}