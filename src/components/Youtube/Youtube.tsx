import React from "react";

interface YoutubeProps {
  videoId: string;
}

const Youtube: React.FC<YoutubeProps> = ({ videoId }) => {
  // Updated embed URL with autoplay and sound
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;

  return (
    <div className="relative w-full h-80 md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-lg">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={embedUrl}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
};

export default Youtube;
