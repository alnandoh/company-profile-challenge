"use client";

interface VideoPlayerProps {
  videoSrc: string;
  videoPoster: string;
}

export default function VideoPlayer({
  videoSrc,
  videoPoster,
}: VideoPlayerProps) {
  return (
    <video
      src={videoSrc}
      poster={videoPoster}
      className="absolute inset-0 w-full h-full opacity-20 object-cover object-right pointer-events-none"
      autoPlay
      playsInline
      muted
      loop
    />
  );
}
