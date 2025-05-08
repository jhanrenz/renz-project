import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Youtube from "./components/Youtube/Youtube";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mobile-Optimized YouTube Embed</h1>
      <Youtube videoId="dQw4w9WgXcQ" /> {/* Replace with any video ID */}
    </div>
  </StrictMode>
);
