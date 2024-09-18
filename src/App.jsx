import { BrowserRouter, Route, Routes } from "react-router-dom";
import FetchData from "./components/FetchFromURL/FetchData";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FetchData />} />
      </Routes>
    </BrowserRouter>
  )
}