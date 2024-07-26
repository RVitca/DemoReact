import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />}></Route>
        <Route path="cards" element={<></>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
