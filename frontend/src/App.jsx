import { BrowserRouter, Route, Routes } from 'react-router-dom';
import heroImg from './assets/heroImg.jpg'
import Navigation from './components/navigation/Navigation';
function App() {
  return (
    <>
    <img src={heroImg} alt="" id="hero-img" />
    <Navigation/>
    </>
  );
}

export default App;
