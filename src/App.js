import React, {useState} from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

import './App.css';
import Home from "./pages/Home";
import CallbackPage from "./pages/CallbackPage";
import Bank from "./pages/Bank";
import { AuthContextProvider } from "./context/auth-context";
import AccountActivity from "./pages/AccountActivity";

const router = createBrowserRouter([
  { path: '/', element: <Home />},
  { path: '/aisp/:id', element: <Bank />},
  { path: '/:id/callback', element: <CallbackPage />},
  { path: '/:id/:acctNum', element: <AccountActivity />}

]);

function App() {
  return (
    <AuthContextProvider>
      <RouterProvider router={router}/>
    </AuthContextProvider>
  );
}

export default App;
