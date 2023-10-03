import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import Banner from '../../components/Banner/Banner';
import bannerImgOne from '../../assets/bannerImageOne.avif';
import Intro from '../../components/Intro/Intro';
import Services from '../../components/Services/Services';
import ContactCta from '../../components/ContactCta/ContactCta';
import HistoryGrid from '../../components/HistoryGrid/HistoryGrid';

function Homepage() {
  const introParagraph = [
    'Emporemque si diciati dolore poriate pellatum ipicit acepudam fuga. Tem qui ut quis verro volorem ilic te dolorro remporepra ducia porio tem sinci alit odis ut a doluptatur maxim exerro dolecae offic temporehent praerfe rspelis miligni aut etum et fugias dolorumquam volut quia dolorer ibusdae re velitisimet volo molorempel endam secatia num fugias inctorionsed quo bea dendundis denda por simus eatia dolesti bustis sincid quaernatur, quiim hil illuptatur, que officiatur? (Kilde: "Erhvervsfremme under Lup, 2016")',
  ];

  const scrollRef = useRef(0);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });
  }, []);

  return (
    <>
      <div ref={scrollRef}>
        <Banner source={bannerImgOne} />
        <main>
          <Intro
            subHeading={'INTROTEKST'}
            heading={
              'TEM QUI UT QUIS VERRO VOLOREM ILIC TE DOLORRO REMPOREPRA DUCIA PORIO TEM SINCI ALIT ODISUT A DOLU'
            }
            paragraph={introParagraph}
          ></Intro>
          <Services />
          <ContactCta />
          <HistoryGrid />
        </main>
      </div>
    </>
  );
}

export default Homepage;
