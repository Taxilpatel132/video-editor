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
    <div className="h-screen flex bg-[#0a0f24] cyber-grid">
      {/* Left Sidebar - Full Height */}
      <Sidebar onSelectTool={setSelectedTool} />
      
      {/* Right Side - Everything except sidebar */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <Navbar />
        
        {/* Main Area - Above Timeline */}
        <div className="flex flex-1 overflow-hidden">
          {/* ToolPanel - Next to sidebar */}
          <div className="w-80 bg-[#0f1629] border-r border-[#5adaff]/20 overflow-y-auto">
            <ToolPanel
              selectedTool={selectedTool || "video"}
              onClose={() => {}}
              onUploadFile={handleUpload}
              hasVideo={!!videoSrc}
              onRemoveVideo={handleRemoveVideo}
            />
          </div>
          
          {/* Video Preview - Center, filling remaining space */}
          <div className="flex-1 flex items-center justify-center bg-[#0a0f24] p-6">
            <VideoPreview src={videoSrc} onRemove={handleRemoveVideo} isToolPanelOpen={false} />
          </div>
        </div>
        
        {/* Timeline - Full width except below sidebar */}
        <Timeline />
      </div>
    </div>
  );
}