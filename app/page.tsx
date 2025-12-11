"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import VideoPreview from "@/components/VideoPreview";
import Timeline from "@/components/Timeline";
import ToolPanel from "@/components/ToolPanel";

export default function Home() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  useEffect(() => {
    return () => {
      if (videoSrc) {
        URL.revokeObjectURL(videoSrc);
      }
    };
  }, [videoSrc]);

  const handleUpload = (file: File | null) => {
    if (!file) return;

    if (videoSrc) {
      URL.revokeObjectURL(videoSrc);
    }

    const url = URL.createObjectURL(file);
    setVideoSrc(url);
  };

  const handleRemoveVideo = () => {
    if (videoSrc) {
      URL.revokeObjectURL(videoSrc);
      setVideoSrc(null);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-[#0a0f24] cyber-grid">
      <Navbar />

      <div className="flex flex-1 overflow-hidden relative">
        <Sidebar onSelectTool={setSelectedTool} />

        <div className="flex flex-col flex-1">
          
            
         
          <VideoPreview src={videoSrc} onRemove={handleRemoveVideo} isToolPanelOpen={!!selectedTool} />
          
          <Timeline />
        </div>

        <ToolPanel
          selectedTool={selectedTool}
          onClose={() => setSelectedTool(null)}
          onUploadFile={handleUpload}
          hasVideo={!!videoSrc}
          onRemoveVideo={handleRemoveVideo}
        />
      </div>
    </div>
  );
}