import { RouterProvider } from "react-router";
import { appRouter } from "./app.router";

export const EcLandingApp = () => {
  return <RouterProvider router={appRouter} />;
};
