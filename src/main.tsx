import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Youtube from './components/Youtube/Youtube'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Autoplay YouTube Embed</h1>
      <Youtube videoId="dQw4w9WgXcQ" />
    </div>
  </StrictMode>,
)
