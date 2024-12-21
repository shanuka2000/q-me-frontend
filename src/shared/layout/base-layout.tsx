import { Button } from "@/components/ui/button";
import logo from "../../assets/logo.svg";
import { Outlet } from "react-router";

const BaseLayout = () => {
  return (
    <>
      <header className="sticky top-0 border-b w-full md:w-[90%] mx-auto bg-white bg-opacity-80 backdrop-blur-md z-50">
        <nav className="container mx-auto flex justify-between items-center p-3 md:p-4">
          <a
            href="/"
            className="text-xl font-bold flex items-center justify-center space-x-2"
          >
            <span className="relative flex items-center justify-center">
              <img src={logo} alt="Logo" className="w-11 absolute" />
              <img src={logo} alt="Logo" className="w-11 absolute" />
              <img src={logo} alt="Logo" className="w-11 absolute" />
              <img src={logo} alt="Logo" className="w-11 absolute" />
              <img src={logo} alt="Logo" className="w-11" />
            </span>
            <span className="text-xl">Q-Me</span>
          </a>
          <ul className="flex space-x-2">
            <li>
              <a href="/sign-in">
                <Button variant="default">Login</Button>
              </a>
            </li>
            <li>
              <a href="/sign-up">
                <Button variant="outline">Sign up</Button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto py-3 md:py-4">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default BaseLayout;
