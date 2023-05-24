import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Project } from './components/Project';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <Banner />
      <Skills />
      <Project />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
