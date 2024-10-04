import './App.css';
import Footer from './componentes/Footer.js';
import Article from './componentes/Article.js';
import NavBar from './componentes/NavBar.js';
import Carousel from './componentes/Carousel.js';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Carousel/>
      <Article />
      <Footer />
    </div>
  );
}

export default App;
