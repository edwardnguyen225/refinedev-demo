"use client";

import { ReactNode } from "react";

import { ColorModeScript } from "@chakra-ui/react";
import { refineTheme } from "@refinedev/chakra-ui";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ColorModeScript initialColorMode={refineTheme.config.initialColorMode} />
      {children}
    </>
  );
}
