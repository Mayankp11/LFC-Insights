import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";

import '@fontsource/calistoga';
import '@fontsource/rouge-script';
import '@fontsource/bungee-shade';
import '@fontsource-variable/lora';
import '@fontsource/berkshire-swash';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </StrictMode>
);
