import type { FC } from "react";
import { LayoutWrapper } from "./styles";
import { Outlet } from "react-router";

export const Layout: FC = () => {
  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  );
};
