import { Outlet } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  const scrollRef = useRef(0);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
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
  }, []);

  return (
    <>
      <div ref={scrollRef} data-scroll-container>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
