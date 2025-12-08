"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import VideoPreview from "@/components/VideoPreview";
import Timeline from "@/components/Timeline";
import ToolPanel from "@/components/ToolPanel";

export default function Home() {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  return (
    <div className="h-screen flex flex-col">

      <Navbar />

      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Sidebar */}
        <Sidebar onSelectTool={setSelectedTool} />

        {/* Main Content */}
        <div className="flex flex-col flex-1 relative">
          <VideoPreview />
          <Timeline />
        </div>

        {/* Right Side Tool Panel */}
        <ToolPanel
          selectedTool={selectedTool}
          onClose={() => setSelectedTool(null)}
        />
      </div>
    </div>
  );
}
