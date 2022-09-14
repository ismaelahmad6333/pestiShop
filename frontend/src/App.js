import "./App.css"
import AppbarDekstop from "./components/appbar/AppbarDekstop"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Products from "./pages/Products"
import Home from "./pages/Home"
import Product from "./components/Product"
function App() {
  return (
    <Router>
      <AppbarDekstop />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Products />} path="/products" />
        <Route element={<Product />} path="/product/:id" />
      </Routes>
    </Router>
  )
}

export default App
