
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="portfolio">
      <Header />

      <div className="workspace">
        <Sidebar />

        <main className="main-content">
          <div id="home">
            <Home />
          </div>

          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;