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
    });

    scroll.update();

    return () => {
      scroll.destroy();
    };
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
