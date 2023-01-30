import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Userpage from "./pages/Userpage";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Detailpage from "./pages/Detailpage";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Homepage />,
      errorElement: <NotFound />,
    },
    {
      path: "/user",
      element: <Userpage />,
    },
    {
      path: "/detail/:id",
      element: <Detailpage />,
    },
  ]
  // createRoutesFromElements(<Route path="/" element={<Homepage />} />)
);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
