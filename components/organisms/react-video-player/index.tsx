"use client";

import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

interface ReactVideoPlayerProps {
  className?: string;
  videoUrl: string; // HLS (.m3u8) or MP4 URL
  loop?: boolean;
  showControls?: boolean;
}

export const ReactVideoPlayer = ({
  className = "",
  videoUrl,
  loop = true,
  showControls = false,
}: ReactVideoPlayerProps) => {
  const ref = useRef(null);
  const [muted, setMuted] = useState<boolean>(true);
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <div
      onClick={() => setMuted(!muted)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative w-full h-full ${className}`}
    >
      {muted && <div className={`absolute transition-opacity duration-100 ease-linear ${hovered ? "opacity-100" : 'opacity-100 md:opacity-0'} top-0 left-0 w-full h-full flex items-center justify-center bg-black/40 md:bg-black/60`}>
        <div className="flex flex-col gap-4 md:gap-12 justify-center items-center ">
            <div className="text-white scale-150 md:scale-400">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-volume2-icon lucide-volume-2"
                >
                    <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
                    <path d="M16 9a5 5 0 0 1 0 6" />
                    <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
                </svg>
            </div>
            <h5 className="text-white text-xl md:text-3xl tracking-wider">Click to Unmute</h5>
        </div>
      </div>}
      <ReactPlayer
        ref={ref}
        src={videoUrl}
        playing={true}
        muted={muted}
        controls={showControls}
        loop={loop}
        width="100%"
        height="100%"
      />
    </div>
  );
};
