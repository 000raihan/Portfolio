import './App.css';
import Footer from './Components/footer';
import NavVar from './Components/NavVar';
import Home from './pages/home';

function App() {
  return (
          <div className='App'>
            <NavVar/>
            <Home/>
            <Footer/>
{/* End  Footer */}
            <div id="preloader" />
            <a href="#" className="back-to-top"><i className="bx bx-up-arrow-alt" /></a>
          </div>
  );
}

export default App;
