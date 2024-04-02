import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layouts/Layout";
import About from "./pages/About";
import LogInPage from "./pages/Login";
import Vans from "./pages/Vans/Vans";
import NotFoundPage from "./components/NotPageFound/NotFoundPage";
import SignUp from "./pages/SignUp";
import VanDetails from "./pages/Vans/VanDetails";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="vans" element={<Vans/>}/> 
        <Route path="vans/:id" element={<VanDetails/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
      <Route path="login" element={<LogInPage/>}/>
      <Route path="signup" element={<SignUp/>}/>
    </Routes>
  )
}