import { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App";
import './styles.css';

const rootElement : Element | null = document.getElementById("root2");
if (!rootElement) throw 'Root node not found';
const root = ReactDOMClient.createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

