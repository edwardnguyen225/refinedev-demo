"use client";

import { ReactNode } from "react";

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import {
  RefineThemes,
  ThemedLayoutV2,
  notificationProvider,
  refineTheme,
} from "@refinedev/chakra-ui";
import { Refine } from "@refinedev/core";
import routerProvider from "@refinedev/nextjs-router/app";
import dataProvider from "@refinedev/simple-rest";
import { Header } from "@components/header";

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
            {
              name: "blog_posts",
              list: "/blog-posts",
              create: "/blog-posts/create",
              edit: "/blog-posts/edit/:id",
              show: "/blog-posts/show/:id",
              meta: {
                canDelete: true,
              },
            },
            {
              name: "categories",
              list: "/categories",
              create: "/categories/create",
              edit: "/categories/edit/:id",
              show: "/categories/show/:id",
              meta: {
                canDelete: true,
              },
            },
          ]}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
          }}
        >
          <ThemedLayoutV2 Header={() => <Header sticky />}>
            {children}
          </ThemedLayoutV2>
        </Refine>
      </ChakraProvider>
    </>
  );
}
