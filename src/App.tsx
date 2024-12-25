import { createBrowserRouter, RouterProvider } from "react-router";
import BaseLayout from "./shared/layout/base-layout";
import Home from "./modules/home";
import Login from "./modules/login";
import FactorOne from "./modules/factor-one";
import SignUp from "./modules/sign-up";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/sign-in",
      element: <Login />,
    },
    {
      path: "/sign-in/factor-one",
      element: <FactorOne />,
    },
    {
      path: "/sign-up",
      element: <SignUp />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
