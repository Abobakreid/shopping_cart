import React from "react";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import About from "./Pages/About";
import StoreContext from "./Context/StoreContext";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Route>
    )
  );
  return (
    <StoreContext>
      <RouterProvider router={router} />
    </StoreContext>
  );
};

export default App;
