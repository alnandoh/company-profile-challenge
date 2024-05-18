"use client";

interface VideoPlayerProps {
  videoSrc: string;
}

export default function VideoPlayer({ videoSrc }: VideoPlayerProps) {
  return (
    <video
      src={videoSrc}
      className="absolute inset-0 w-full h-full opacity-20 object-cover object-right pointer-events-none"
      autoPlay
      muted
      loop
    />
  );
}
