import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import ErrorBoundary from "./components/other/ErrorBoundary.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
    <AuthProvider>
      <App />
    </AuthProvider>
    </ErrorBoundary>
  </StrictMode>
);
