import { Navigate, useRoutes } from "react-router-dom";
import { MainLayout } from "../layout";
import { HomePage } from "./elements";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          element: <HomePage />,
          index: true,
        },
      ],
    },
  ]);
}
