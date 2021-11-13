import './App.scss';
import Header from "./components/header/header.component";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigation from "./Navigation/navigation.component";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div>
        <Router>
            <Header />
            <Navigation />
            <Footer />
        </Router>
    </div>
  );
}

export default App;
