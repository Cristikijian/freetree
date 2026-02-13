import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import JournalPage from "../pages/JournalPage";
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
      {
        path: "/journal",
        element: <JournalPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
