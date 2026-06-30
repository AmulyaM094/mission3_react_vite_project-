import { useState } from "react";
import Card from "../components/Card";

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Welcome to My React Project</h1>

      <Card
        title="React"
        description="React helps build interactive user interfaces."
      />

      <Card
        title="Vite"
        description="Vite provides fast development and build tools."
      />

      <h2>Counter App</h2>

      <h3>{count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}

export default Home;