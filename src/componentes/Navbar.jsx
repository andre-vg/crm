import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import "../index.css";
import AuthService from "../services/autenticador";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

export default function Nav() {
  const [openNav, setOpenNav] = useState(false);
  const [logged, setLogged] = useState(AuthService.isLoggedIn());

  AuthService.observeStatus((user) => {
    setLogged(!!user);
  });

  const handleLogin = async () => {
    console.log("login");
    await AuthService.LoginWithGoogle()
      .then((res) => {
        console.log("response", res);
      })
      .catch((err) => {});
  };

  const handleLogout = async () => {
    await AuthService.Logout().then(() => {
      console.log("logout");
    });
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className=" flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium poppins"
      >
        <a
          href={logged ? "/campeonatos" : "#"}
          className={
            logged
              ? "flex items-center "
              : "flex items-center text-gray-400 hover:text-gray-400 cursor-default"
          }
        >
          Campeonatos
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium poppins"
      >
        <a href="/jogadores" className="flex items-center ">
          Jogadores
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-medium poppins"
      >
        <a href="#" className="flex items-center">
          Decks
        </a>
      </Typography>
    </ul>
  );

  return (
    <div className="sticky top-2 z-50">
      <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 lg:mt-2 poppins ">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="/"
            variant="small"
            className="mr-4 cursor-pointer py-1.5 font-medium poppins"
          >
            <span className="text-4xl kanit">CRM</span>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
            onClick={!logged ? handleLogin : handleLogout}
          >
            <span>{!logged ? "Login" : "Sair"}</span>
          </Button>
          <button
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            onClick={() => {
              setOpenNav(!openNav);
              console.log("apertou");
            }}
          >
            {openNav ? <ImCross /> :  <FaBars /> }
          </button>
        </div>
        <MobileNav open={openNav}>
          {navList}
          <Button variant="gradient" size="sm" fullWidth className="mb-2">
            <span>Login</span>
          </Button>
        </MobileNav>
      </Navbar>
    </div>
  );
}
