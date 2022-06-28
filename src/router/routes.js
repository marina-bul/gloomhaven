import HomePage from "../pages/HomePage";
import IntroPage from "../pages/IntroPage";
import LibraryPage from "../pages/LibraryPage";
import LoginPage from "../pages/Login";
import RegistrPage from "../pages/Reg";
import ShopPage from "../pages/ShopPage";

export const publicRoutes = [
  { path: "/", component: IntroPage, exact: true },
  { path: "/login", component: LoginPage, exact: true },
  { path: "/reg", component: RegistrPage, exact: true },
];

export const privateRoutes = [
  { path: "/home", component: HomePage, exact: true },
  { path: "/library", component: LibraryPage, exact: true },
  { path: "/shop", component: ShopPage, exact: true },
];
