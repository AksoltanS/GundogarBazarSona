   import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import MainLayout from "./components/MainLayout";
import { ThemeProvider } from "@mui/material";
import { theme } from"./helper/theme";
import HomePage from "./pages/Homepage";
// import AllProducts from "./pages/AllProducts";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage/>} />
            {/* <Route path="/allproduct" element={<AllProducts/>}/> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App
     

