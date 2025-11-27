"use client";

import React, { useRef, useState } from "react";
import ReactPlayer from "react-player";

interface ReactVideoPlayerProps {
  className?: string;
  videoUrl: string;
  loop?: boolean;
  showControls?: boolean;
}

export const ReactVideoPlayer = ({
  className = "",
  videoUrl,
  loop = true,
  showControls = false,
}: ReactVideoPlayerProps) => {
  const playerRef = useRef(null);
  const [muted, setMuted] = useState(true);

  return (
    <div className={`relative w-full h-full ${className}`}>
      
      {/* MUTE BUTTON (TOP LAYER) */}
      <div
        onClick={() => setMuted(!muted)}
        className="absolute top-8 left-8 z-[9999] cursor-pointer p-2 bg-black/40 rounded-full"
      >
        <div className="text-white">
          {!muted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z" />
              <path d="M16 9a5 5 0 0 1 0 6" />
              <path d="M19.364 18.364a9 9 0 0 0 0-12.728" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 9a5 5 0 0 1 .95 2.293" />
              <path d="M19.364 5.636a9 9 0 0 1 1.889 9.96" />
              <path d="m2 2 20 20" />
              <path d="m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11" />
              <path d="M9.828 4.172A.686.686 0 0 1 11 4.657v.686" />
            </svg>
          )}
        </div>
      </div>

      {/* VIDEO (BOTTOM LAYER) */}
      <div className="absolute inset-0 z-[1]">
        <ReactPlayer
          ref={playerRef}
          src={videoUrl}
          playing={true}
          muted={muted}
          controls={showControls}
          loop={loop}
          width="100%"
          height="100%"
          playsInline
        />
      </div>
    </div>
  );
};
