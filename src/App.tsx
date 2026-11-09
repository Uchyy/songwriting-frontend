import Hero from "./sections/Hero";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./components/Footer";
import NavBar from "./sections/NavBar";
import SongSection from "./sections/Songs";

  function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />

      <main className="flex-1">
        <Hero />
        <SongSection />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;