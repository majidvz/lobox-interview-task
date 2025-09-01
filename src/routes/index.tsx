import type { FC } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { PublicRoutes } from "./public";

export const AppRoutes: FC = () => {
  const routes = createBrowserRouter(PublicRoutes);

  return <RouterProvider router={routes} />;
};
