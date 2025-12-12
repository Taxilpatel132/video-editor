"use client";

import { Play, Pause, SkipBack, SkipForward, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TimelineProps {
  hasVideo: boolean;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onPlayPause: () => void;
  onSeekBack: () => void;
  onSeekForward: () => void;
  formattedTime: string;
}

export default function Timeline({
  hasVideo,
  isPlaying,
  currentTime,
  duration,
  onPlayPause,
  onSeekBack,
  onSeekForward,
  formattedTime,
}: TimelineProps) {
  return (
    <div className="w-full border-t border-[#5adaff]/20 bg-[#0f1629] p-4">
      {/* Control bar: timeline header + playback controls */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Clock size={16} className="text-[#5adaff]" />
          <h3 className="font-medium text-[#5adaff] tracking-wide">Timeline</h3>
        </div>
        {/* Playback controls row */}
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 text-white/60 hover:text-[#5adaff] disabled:opacity-40"
            onClick={onSeekBack}
            disabled={!hasVideo}
            title="Seek back 5 seconds"
          >
            <SkipBack size={14} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 text-white/60 hover:text-[#5adaff] disabled:opacity-40"
            onClick={onPlayPause}
            disabled={!hasVideo}
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-7 w-7 text-white/60 hover:text-[#5adaff] disabled:opacity-40"
            onClick={onSeekForward}
            disabled={!hasVideo}
            title="Seek forward 5 seconds"
          >
            <SkipForward size={14} />
          </Button>
          <Badge variant="outline" className="bg-[#1a1f35] text-[#5adaff] border-[#5adaff]/50 font-mono text-xs px-2 py-1">
            {formattedTime}
          </Badge>
        </div>
      </div>

      {/* Timeline track area */}
      <Card className="h-20 bg-[#1a1f35] border-[#5adaff]/20 relative overflow-hidden">
        <CardContent className="p-0 h-full">
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#5adaff]/5 to-transparent"></div>
          <div className="flex items-center justify-center h-full relative z-10">
            <div className="text-center">
              <p className="text-white/60 text-sm tracking-wider mb-2">Video & Audio Tracks</p>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="bg-[#5adaff]/10 border-[#5adaff]/30 text-[#5adaff] text-xs">
                  Video
                </Badge>
                <Badge variant="outline" className="bg-[#ff5af1]/10 border-[#ff5af1]/30 text-[#ff5af1] text-xs">
                  Audio
                </Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}