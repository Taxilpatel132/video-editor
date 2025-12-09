"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import VideoPreview from "@/components/VideoPreview";
import Timeline from "@/components/Timeline";
import ToolPanel from "@/components/ToolPanel";
// Laksh
// Taxil 3324234 45435 jbewdu poo

export default function Home() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);
  
  // videoSrc is an object URL (string) created from the uploaded File
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
   // cleanup on unmount — revoke object URL if present
  useEffect(() => {
    return () => {
      if (videoSrc) {
        URL.revokeObjectURL(videoSrc);
      }
    };
  }, [videoSrc]);
   // onUpload receives a File object from ToolPanel
  const handleUpload = (file: File | null) => {
    if (!file) return;

    // revoke previous url
    if (videoSrc) {
      URL.revokeObjectURL(videoSrc);
    }

    const url = URL.createObjectURL(file);
    setVideoSrc(url);

    // Optional: automatically close the panel after upload
    // setSelectedTool(null);
  };

  return (
    <div className="h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <Sidebar onSelectTool={setSelectedTool} />

        {/* Main Content */}
        <div className="flex flex-col flex-1 relative">
          <VideoPreview src={videoSrc} />
          <Timeline />
        </div>

        {/* Right Side Tool Panel */}
        <ToolPanel
          selectedTool={selectedTool}
          onClose={() => setSelectedTool(null)}
          onUploadFile={handleUpload}
        />
      </div>
    </div>
  );
}
