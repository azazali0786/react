import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive"); // Fixed the spelling

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
    </div>
  );
}

export default App;
 