import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layouts/Layout";
import About from "./pages/About";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
      </Route>
    </Routes>
  )
}