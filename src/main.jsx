import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Card from "./components/Card.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Card
      title="My title test 5"
      description="My description"
      image="https://picsum.photos/200/300"
    />
  </StrictMode>,
);
