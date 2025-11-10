import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import CategoryPage from "./components/CategoryPage";
import EventPage from "./components/EventPage";
import Dashboard from "./components/Dashboard";

function App() {
  const [count, setCount] = useState(0);
  const [loggendIn, setLoggedIn] = useState(false);

  return (
    <Layout>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path=":event" element={<EventPage />} />
        <Route path="kategori/:subcategory" element={<CategoryPage />} />
        <Route path="min-side" element={<Dashboard loggedIn={loggendIn} />} />
      </Routes>
    </Layout>
  );
}

export default App;
