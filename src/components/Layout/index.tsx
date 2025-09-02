import type { FC } from "react";
import { Outlet } from "react-router";
import { LayoutWrapper } from "./styles";

export const Layout: FC = () => {
  return (
    <LayoutWrapper>
      <Outlet />
    </LayoutWrapper>
  );
};
