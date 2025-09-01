import { Navigate, type RouteObject } from "react-router";
import { OnboardingPage, SciencesFormPage } from "../pages";
import { Layout } from "../components";
import { ROUTES } from "./routes";

export const PublicRoutes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "*", element: <Navigate to={ROUTES.ONBOARDING} /> },
      { path: "", element: <Navigate to={ROUTES.ONBOARDING} /> },
      {
        path: ROUTES.ONBOARDING,
        element: <OnboardingPage />,
      },
      { path: ROUTES.SCIENCES_FORM, element: <SciencesFormPage /> },
    ],
  },
];
