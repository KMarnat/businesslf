import Banner from '../../components/Banner/Banner';
import bannerImgOne from '../../assets/bannerImageOne.avif';
import Intro from '../../components/Intro/Intro';
import Services from '../../components/Services/Services';
import ContactCta from '../../components/ContactCta/ContactCta';
import HistoryGrid from '../../components/HistoryGrid/HistoryGrid';

import { introParagraph } from '../../utils/signuppageutils';

function Homepage() {
  return (
    <>
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
    </>
  );
}

export default Homepage;
