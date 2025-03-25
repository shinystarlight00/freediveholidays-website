import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";

import Store from "./store";

createRoot(document.getElementById("root")!).render(
  <Provider store={Store}>
    <App />
  </Provider>
);
