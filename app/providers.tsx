"use client";

import { ReactNode } from "react";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import {
  RefineThemes,
  notificationProvider,
  refineTheme,
} from "@refinedev/chakra-ui";
import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/nextjs-router/app";
import dataProvider from "@refinedev/simple-rest";

const API_URL = "https://api.fake-rest.refine.dev";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      <ColorModeScript initialColorMode={refineTheme.config.initialColorMode} />

      <ChakraProvider theme={RefineThemes.Purple}>
        <Refine
          routerProvider={routerProvider}
          dataProvider={dataProvider(API_URL)}
          notificationProvider={notificationProvider}
          resources={[
            {
              name: "posts",
              list: "/posts",
              show: "/posts/show/:id",
            },
          ]}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          {children}
        </Refine>
      </ChakraProvider>
    </>
  );
}
