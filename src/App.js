
import './App.css';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Formsec from './components/Formsec';
import Header from './components/Header';
import Mission from './components/Mission';
import Myslider from './components/Myslider';
import Subscribe from './components/Subscribe';
import BackToTop from "../src/assets/images/BackToTop.webp";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Loader from './components/Loader';

function App() {
  // ----------------backToTop----------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
      }
    );
    Aos.refresh()
  });
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {screenLoading ? (
        <Loader />
      ) : (
        <div className="App overflow-hidden">
          <Header />
          <Mission />
          <Myslider />
          <Formsec />
          <Faq />
          <Subscribe />
          <Footer />
          <div onClick={() => top()} className={backToTop ? "shadow-[0_5px_16px_rgba(225,_225,_225,_1)] fixed bottom-[3%] h-[50px] w-[50px] flex items-center justify-center backTopBtn rounded-[50px] bg-purple-600 cursor-pointer border-[2px] border-solid border-white animate-bounce transition-all ease-linear duration-300 right-[2%] z-[10]" : "hidden"}>
            <img src={BackToTop} alt='BackToTop' />
          </div>
        </div>
      )
      }
    </div>
  )
}


export default App;
