"use client";

import { Video, Music, Image, Type, Sparkles } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  onSelectTool: (tool: string | null) => void;
}

export default function Sidebar({ onSelectTool }: SidebarProps) {
  const tools = [
    {
      id: "video",
      name: "Video",
      description: "Upload & edit",
      icon: Video,
      color: "blue", // #5adaff
      badge: "Pro"
    },
    {
      id: "audio",
      name: "Audio", 
      description: "Sound & music",
      icon: Music,
      color: "blue", // #5adaff
      badge: null
    },
    {
      id: "image",
      name: "Image",
      description: "Photos & graphics", 
      icon: Image,
      color: "pink", // #ff5af1
      badge: null
    },
    {
      id: "text",
      name: "Text",
      description: "Titles & captions",
      icon: Type,
      color: "pink", // #ff5af1
      badge: "AI"
    }
  ];

  const getColorClasses = (color: string) => {
    if (color === "blue") {
      return {
        hoverBorder: "hover:border-[#5adaff]/40",
        hoverBg: "hover:bg-[#5adaff]/5",
        iconBg: "bg-[#5adaff]/20",
        iconBgHover: "group-hover:bg-[#5adaff]/30",
        iconColor: "text-[#5adaff]",
        textHover: "group-hover:text-[#5adaff]",
        badgeBg: "bg-[#5adaff]/10",
        badgeText: "text-[#5adaff]",
        badgeBorder: "border-[#5adaff]/30"
      };
    } else {
      return {
        hoverBorder: "hover:border-[#ff5af1]/40",
        hoverBg: "hover:bg-[#ff5af1]/5",
        iconBg: "bg-[#ff5af1]/20",
        iconBgHover: "group-hover:bg-[#ff5af1]/30",
        iconColor: "text-[#ff5af1]",
        textHover: "group-hover:text-[#ff5af1]",
        badgeBg: "bg-[#ff5af1]/10",
        badgeText: "text-[#ff5af1]",
        badgeBorder: "border-[#ff5af1]/30"
      };
    }
  };

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
        {tools.map((tool) => {
          const colorClasses = getColorClasses(tool.color);
          const IconComponent = tool.icon;
          
          return (
            <Card 
              key={tool.id}
              className={`bg-[#1a1f35] border-white/10 ${colorClasses.hoverBorder} cursor-pointer transition-all group ${colorClasses.hoverBg}`}
              onClick={() => onSelectTool(tool.id)}
            >
              <CardContent className="p-2">
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 ${colorClasses.iconBg} rounded ${colorClasses.iconBgHover} transition-all`}>
                    <IconComponent size={14} className={colorClasses.iconColor} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-sm font-medium text-white ${colorClasses.textHover} tracking-wide truncate`}>
                      {tool.name}
                    </div>
                    <div className="text-xs text-white/50">{tool.description}</div>
                  </div>
                  {tool.badge && (
                    <Badge variant="outline" className={`${colorClasses.badgeBg} ${colorClasses.badgeText} ${colorClasses.badgeBorder} text-xs px-1 py-0 h-4`}>
                      {tool.badge}
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}