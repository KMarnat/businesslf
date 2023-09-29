import Banner from '../../components/Banner/Banner';
import bannerImgTwo from '../../assets/bannerImageTwo.avif';
import HistoryGrid from '../../components/HistoryGrid/HistoryGrid';
import Intro from '../../components/Intro/Intro';
import TimeAndPlace from '../../components/TimeAndPlace/TimeAndPlace';

function ContactPage() {
  return (
    <>
      <Banner source={bannerImgTwo} />
      <main>
        <Intro heading={'GRATIS TILBUD'} modifier={'intro__content--modified'}>
          <h2>
            Bliv klogere
            <br /> på e-handel
          </h2>
          <p>
            Har du planer om at starte din egen virksomhed eller er du iværksætter der har brug for
            indspark i forhold til at udvikle din virksomhed? Business Days er vores gratis
            rådgivningsdage for dig som overvejer at tage springet som selvstændig eller er
            påbegyndt rejsen som iværksætter og har brug for sparring eller rådgivning.
          </p>
          <p>
            Business Days er gratis men kræver tilmelding. Send os dine kontaktoplysninger samt en
            beskrivelse af din udfordring via formularen nedenfor.
          </p>
          <h5>HVAD KAN MAN FÅ HJÆLP TIL?</h5>
          <ul>
            <li>Forretningsudvikling</li>
            <li>Juridisk vejleding</li>
            <li>Revision</li>
            <li>Kommunikation</li>
            <li>Salg</li>
          </ul>
          <TimeAndPlace />
        </Intro>
        <HistoryGrid />
        <section></section>
      </main>
    </>
  );
}

export default ContactPage;
