import Hero from './components/Hero';
import './App.css';
import { Analytics } from "@vercel/analytics/next"
function App() {
  return (
    <div className="app">
      <Hero />
    </div>
  );
}

export default App; 
