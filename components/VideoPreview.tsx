"use client";

import { Trash2 } from "lucide-react";

interface Props {
  src: string | null;
  onRemove?: () => void;
}

export default function VideoPreview({ src, onRemove }: Props) {
  return (
    <div className="flex-1 flex items-center justify-center bg-[#0a0f24] p-6">
      <div className="w-[70%] aspect-video bg-black rounded-2xl overflow-hidden relative flex items-center justify-center border border-[#5adaff]/20 hover:border-[#5adaff]/40 transition-all">
        {src ? (
          <>
            <video
              src={src}
              controls
              className="w-full h-full object-contain bg-black rounded-2xl"
            />
            {/* Remove overlay button */}
            {onRemove && (
              <button
                onClick={onRemove}
                className="absolute top-4 right-4 p-2 bg-[#0f1629]/80 hover:bg-[#ff5af1]/20 rounded-xl transition-all border border-[#ff5af1]/40"
                title="Remove video"
              >
                <Trash2 size={16} className="text-[#ff5af1]" />
              </button>
            )}
          </>
        ) : (
          <div className="text-center">
            <div className="text-[#5adaff] text-lg font-medium tracking-wide">Video Preview</div>
            <div className="text-white/50 text-sm mt-2">Upload a video to get started</div>
          </div>
        )}
      </div>
    </div>
  );
}