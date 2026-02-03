import Hero from './components/Hero';
import './App.css';
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="app">

      <Hero />
      <Analytics />
    </div>
  );
}

export default App; 
