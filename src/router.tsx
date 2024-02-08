import { createBrowserRouter } from "react-router-dom";
import { Cart, Copilot, Deals, ErrorPage, Home, Microsoft365, SmallBusiness, Support, Surface, Teams, Windows, Xbox } from "./pages";
import { SignIn, SignOut } from "./auth";

const route = createBrowserRouter([
	{ path: "/", element: <Home />, errorElement: <ErrorPage /> },
	{ path: "cart", element: <Cart /> },
	{ path: "copilot", element: <Copilot /> },
	{ path: "deals", element: <Deals /> },
	{ path: "microsoft-365", element: <Microsoft365 /> },
	{ path: "business", element: <SmallBusiness /> },
	{ path: "support", element: <Support /> },
	{ path: "xbox", element: <Xbox /> },
	{ path: "teams", element: <Teams /> },
	{ path: "windows", element: <Windows /> },
	{ path: "surface", element: <Surface /> },

	{ path: "login", element: <SignIn /> },
	{ path: "logout", element: <SignOut /> },
]);

export default route;
