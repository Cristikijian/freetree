import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import LoginPage from "../pages/LoginPage";
import ProfilePage from "../pages/ProfilePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
