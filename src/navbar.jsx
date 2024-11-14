import { useState } from "react";

export default function navbar() {
  const [name, setName] = useState("azizbek");

  const handleOpen = () => {
    setName("akbarali");
  };

  return (
    <main>
      <h1>My name is {name} </h1>
      <button onClick={handleOpen}>boss</button>
    </main>
  );
}
