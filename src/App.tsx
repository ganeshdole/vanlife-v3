import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layouts/Layout";
import About from "./pages/About";
import LogInPage from "./pages/Login";
import Vans from "./pages/Vans/Vans";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="vans" element={<Vans/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Route>
      <Route path="login" element={<LogInPage/>}/>
    </Routes>
  )
}