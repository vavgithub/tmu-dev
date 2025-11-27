"use client";

import { SharedLayout } from "@/components/organisms/shared-layout";
import { Logo } from "@/components/molecules/logo";
import { VideoCTA } from "@/components/organisms/video-cta";
import { VideoPlayer } from "@/components/organisms/video-player";
import { ExitIntentModal } from "@/components/organisms/exit-intent-modal";
import { useExitIntent } from "@/hooks/useExitIntent";
import { ReactVideoPlayer } from "@/components/organisms/react-video-player";

export const MovieWatchTemplate = () => {
  const { showModal, closeModal } = useExitIntent({ enabled: false });

  return (
    <SharedLayout hideLogo hideBinary>
      {/* Exit Intent Modal */}
      <ExitIntentModal isOpen={showModal} onClose={closeModal} />
      {/* Main Content - All visible on desktop */}
      <div className="w-full flex flex-col items-center justify-center py-4 md:py-6 px-4">
        {/* Logo */}
        <div className="mb-3 md:mb-4 flex-shrink-0">
          <Logo />
        </div>

        {/* Headline Text */}
        <div className="text-center mb-4 md:mb-6 max-w-4xl px-2">
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6"
            style={{
              fontFamily: "General Sans, Satoshi, sans-serif",
              textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
            }}
          >
            Watch{" "}
            <span className="inline-block relative pb-4">
              <span
                style={{
                  color: "#ffffff",
                  textShadow:
                    "0 0 20px rgba(255, 255, 255, 0.4), 1px 1px 2px rgba(0, 0, 0, 0.8)",
                }}
              >
                &quot;The Key&quot;
              </span>
              {/* Green stripes underneath */}
              <div
                className="absolute left-0 right-0 flex flex-col gap-[2px]"
                style={{ top: "calc(100% - 8px)" }}
              >
                <div
                  style={{
                    height: "3px",
                    width: "100%",
                    background:
                      "linear-gradient(90deg, transparent 0%, #00ff05 20%, #00ff05 50%, #00ff05 80%, transparent 100%)",
                    boxShadow: "0 0 10px rgba(0, 255, 5, 0.8)",
                  }}
                />
                <div
                  style={{
                    height: "3px",
                    width: "100%",
                    background:
                      "linear-gradient(90deg, transparent 5%, #00ff05 25%, #00ff05 50%, #00ff05 75%, transparent 95%)",
                    boxShadow: "0 0 8px rgba(0, 255, 5, 0.6)",
                  }}
                />
              </div>
            </span>{" "}
            Movie
          </h2>
        </div>

        {/* Video Player - Using VideoPlayer component */}
        <div className="w-full max-w-[30rem] md:max-w-[37rem] lg:max-w-[55vw] overflow-hidden rounded-4xl aspect-[16/9] flex justify-center items-center  flex-shrink-0">
          {/* <VideoPlayer
            className="relative"
            exitIntentOpen={showModal}
            playerId="vid-6924ba788dbc00147a278f10"
            scriptSrc="https://scripts.converteai.net/2f1a2a53-b695-4680-8c86-09db4b468975/players/6924ba788dbc00147a278f10/v4/player.js"
          /> */}
          <ReactVideoPlayer showControls videoUrl="https://d2zc0gy08nitgj.cloudfront.net/video-data/Out_now_Reel4_v2_cropped.mp4" />
        </div>

        {/* CTA Section with glow flex justify-center items-center */}
        <div className="w-full max-w-[95vw] md:max-w-[85vw] lg:max-w-[55vw] relative mt-3 md:mt-4 flex-shrink-0">
          {/* Oval Glow Behind BOOK NOW Button */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none z-0"
            style={{
              width: "500px",
              height: "300px",
              background:
                "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(0, 255, 5, 0.25) 0%, rgba(0, 255, 5, 0.12) 30%, transparent 70%)",
              filter: "blur(60px)",
              mixBlendMode: "screen",
            }}
          />
          <div className="relative z-10">
            <VideoCTA />
          </div>
        </div>
      </div>
    </SharedLayout>
  );
};
