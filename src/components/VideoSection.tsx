import { motion } from "framer-motion";
import { Play, Pause, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleStart = () => {
    const video = videoRef.current;
    if (!video) return;

    setIsInteractive(true);
    video.muted = false;
    video.loop = false;
    video.controls = true;
    video.play();
    setIsPlaying(true);
  };

  const handleTogglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateProgress = () => {
      if (!video.duration) return;
      setProgress((video.currentTime / video.duration) * 100);
    };

    video.addEventListener("timeupdate", updateProgress);
    video.addEventListener("pause", () => setIsPlaying(false));
    video.addEventListener("play", () => setIsPlaying(true));

    return () => {
      video.removeEventListener("timeupdate", updateProgress);
      video.removeEventListener("pause", () => setIsPlaying(false));
      video.removeEventListener("play", () => setIsPlaying(true));
    };
  }, [isInteractive]);

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-orange-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="absolute right-10 top-12 w-32 h-32 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

      <div className="section-container relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700 backdrop-blur-md dark:border-orange-500/20 dark:bg-orange-500/5 dark:text-orange-200">
            <Sparkles className="w-4 h-4 text-orange-300" />
            Quick demo of my Office Add-in process
          </div>
          <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-heading font-bold leading-tight text-foreground">
            Watch the <span className="gradient-text-both">Live Add-in Walkthrough</span>
          </h2>
          <p className="mt-4 text-base md:text-lg text-muted-foreground mx-auto max-w-2xl">
            This section highlights an interactive demo with smooth motion, controls, and a polished glass presentation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[2rem] border border-border/40 bg-white/5 shadow-[0_40px_120px_rgba(0,0,0,0.12)] backdrop-blur-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10 opacity-80 mix-blend-screen" />
          <div className="absolute left-6 top-6 w-16 h-16 rounded-full bg-orange-500/10 blur-2xl" />
          <div className="absolute right-6 bottom-6 w-24 h-24 rounded-full bg-purple-500/10 blur-3xl" />

          <div className="relative overflow-hidden rounded-[2rem]">
            <video
              ref={videoRef}
              src="/lv_0_20250731140001_compressed.mp4"
              poster="/og-office-addin-development.png"
              className="w-full h-full object-cover min-h-[320px]"
              muted
              preload="none"
              playsInline
            />

            <div className="absolute inset-x-0 top-0 flex items-center justify-between px-6 py-4">
              <div className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs uppercase tracking-[0.18em] text-slate-100">
                Demo Reel
              </div>
              <div className="rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs text-purple-200">
                Enhanced walkthrough
              </div>
            </div>

            {!isInteractive && (
              <button
                onClick={handleStart}
                className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm transition-colors duration-300 hover:bg-black/50"
                aria-label="Start video walkthrough"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-orange-500 to-purple-600 shadow-[0_30px_80px_rgba(255,145,0,0.2)]"
                >
                  <Play className="w-10 h-10 text-white" />
                </motion.div>
              </button>
            )}
          </div>

          <div className="border-t border-border/40 bg-slate-950/40 px-6 py-5 backdrop-blur-xl">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Video Overview</p>
                <h3 className="mt-2 text-xl font-semibold text-foreground">
                  Full demo with clean animation and real Add-in interaction
                </h3>
              </div>

              <button
                type="button"
                onClick={handleTogglePlay}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-gradient-to-r from-orange-500/20 to-purple-500/20 px-4 py-2 text-sm font-medium text-white transition hover:scale-105"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                {isPlaying ? "Pause" : "Play"}
              </button>
            </div>

            <div className="mt-5 h-2 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-orange-400 to-purple-400"
                style={{ width: `${progress}%` }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </div>
            <div className="mt-3 flex justify-between text-xs text-slate-400">
              <span>{Math.round(progress)}% watched</span>
              <span>{isInteractive ? "Controls enabled" : "Tap to start"}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection;

