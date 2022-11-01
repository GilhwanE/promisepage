import "./App.css";
import { Reset } from "styled-reset";
import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Reset />
      <Header />
      <Section />
      <Footer />
    </>
  );
}

export default App;
