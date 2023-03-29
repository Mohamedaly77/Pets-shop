import './App.css';
import About from './components/About';
import Discount from './components/Discount';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Offer from './components/Offer';
import Petprice from './components/Petprice';
import Shop from './components/Shop';
import styles from './Style';

function App() {
  return (
    <>
      <div className=" w-full">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <Home />
        <Shop />
        <Petprice />
        <About />
        <Discount />
        <Offer />
        <Footer />
      </div>
    </>
  );
}

export default App;
