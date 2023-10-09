import { Outlet } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import arrow from './assets/arrow.svg';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const scrollRef = useRef(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
      mobile: {
        smooth: true,
      },
      tablet: {
        smooth: true,
        breakpoint: 0,
      },
    });

    const resizeObserver = new ResizeObserver(() => {
      scroll.update();
    });

    const scrollContainer = document.querySelector('[data-scroll-container]');
    resizeObserver.observe(scrollContainer);

    scroll.on('scroll', (obj) => {
      if (obj.scroll.y > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container>
      <Header />
      <Outlet />

      <a
        href="#top"
        className={`scrollbutton ${isVisible ? 'scrollbutton--visible' : ''}`}
        role="button"
        aria-label="Back to top"
        data-scroll-to
      >
        <img src={arrow} className="scrollbutton__icon" alt="arrow icon" />
      </a>

      <Footer />
    </div>
  );
}

export default App;
