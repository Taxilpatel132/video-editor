"use client";

import { Video, Music, Image, Type, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  onSelectTool: (tool: string | null) => void;
}

export default function Sidebar({ onSelectTool }: SidebarProps) {
  return (
    <div className="w-64 h-full bg-[#0f1629] border-r border-[#5adaff]/20 p-4">
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-1">
          <Sparkles size={14} className="text-[#5adaff]" />
          <h2 className="text-sm font-semibold text-[#5adaff] tracking-wide">Tools</h2>
        </div>
        <p className="text-xs text-white/60">Select editing tools</p>
      </div>

      <div className="space-y-2">
        <Card 
          className="bg-[#1a1f35] border-white/10 hover:border-[#5adaff]/40 cursor-pointer transition-all group hover:bg-[#5adaff]/5 py-3"
          onClick={() => onSelectTool("video")}
        >
          <CardContent className="p-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-[#5adaff]/20 rounded group-hover:bg-[#5adaff]/30 transition-all">
                <Video size={14} className="text-[#5adaff]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white group-hover:text-[#5adaff] tracking-wide truncate">Video</div>
                <div className="text-xs text-white/50">Upload & edit</div>
              </div>
              <Badge variant="outline" className="bg-[#5adaff]/10 text-[#5adaff] border-[#5adaff]/30 text-xs px-1 py-0 h-4">
                Pro
              </Badge>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="bg-[#1a1f35] border-white/10 hover:border-[#5adaff]/40 cursor-pointer transition-all group hover:bg-[#5adaff]/5 py-3"
          onClick={() => onSelectTool("audio")}
        >
          <CardContent className="p-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-[#5adaff]/20 rounded group-hover:bg-[#5adaff]/30 transition-all">
                <Music size={14} className="text-[#5adaff]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white group-hover:text-[#5adaff] tracking-wide truncate">Audio</div>
                <div className="text-xs text-white/50">Sound & music</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="bg-[#1a1f35] border-white/10 hover:border-[#ff5af1]/40 cursor-pointer transition-all group hover:bg-[#ff5af1]/5 py-3"
          onClick={() => onSelectTool("image")}
        >
          <CardContent className="p-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-[#ff5af1]/20 rounded group-hover:bg-[#ff5af1]/30 transition-all">
                <Image size={14} className="text-[#ff5af1]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white group-hover:text-[#ff5af1] tracking-wide truncate">Image</div>
                <div className="text-xs text-white/50">Photos & graphics</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="bg-[#1a1f35] border-white/10 hover:border-[#ff5af1]/40 cursor-pointer transition-all group hover:bg-[#ff5af1]/5 py-3"
          onClick={() => onSelectTool("text")}
        >
          <CardContent className="p-2">
            <div className="flex items-center gap-2">
              <div className="p-1.5 bg-[#ff5af1]/20 rounded group-hover:bg-[#ff5af1]/30 transition-all">
                <Type size={14} className="text-[#ff5af1]" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium text-white group-hover:text-[#ff5af1] tracking-wide truncate">Text</div>
                <div className="text-xs text-white/50">Titles & captions</div>
              </div>
              <Badge variant="outline" className="bg-[#ff5af1]/10 text-[#ff5af1] border-[#ff5af1]/30 text-xs px-1 py-0 h-4">
                AI
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}