"use client";

import { Trash2 } from "lucide-react";

interface Props {
  src: string | null;
  onRemove?: () => void;
}

export default function VideoPreview({ src, onRemove }: Props) {
  return (
    <div className="flex-1 flex items-center justify-center bg-gray-100 p-6">
      <div className="w-[70%] aspect-video bg-black rounded-lg overflow-hidden shadow-md relative flex items-center justify-center">
        {src ? (
          <>
            <video
              src={src}
              controls
              className="w-full h-full object-contain bg-black"
            />
            {/* Remove overlay button top-right */}
            {onRemove && (
              <button
                onClick={onRemove}
                className="absolute top-3 right-3 p-2 bg-white/80 rounded-md hover:bg-white"
                title="Remove video"
              >
                <Trash2 size={16} />
              </button>
            )}
          </>
        ) : (
          <div className="text-white">Video Preview</div>
        )}
      </div>
    </div>
  );
}
