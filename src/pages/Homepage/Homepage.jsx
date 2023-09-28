import Banner from '../../components/Banner/Banner';
import bannerImgOne from '../../assets/bannerImageOne.avif';
import Intro from '../../components/Intro/Intro';
import Services from '../../components/Services/Services';
import ContactCta from '../../components/ContactCta/ContactCta';
import HistoryGrid from '../../components/HistoryGrid/HistoryGrid';

function Homepage() {
  return (
    <>
      <Banner source={bannerImgOne} />
      <main>
        <Intro>
          <p>
            <p>
              Emporemque si diciati dolore poriate pellatum ipicit acepudam fuga. Tem qui ut quis
              verro volorem ilic te dolorro remporepra ducia porio tem sinci alit odis ut a
              doluptatur maxim exerro dolecae offic temporehent praerfe rspelis miligni aut etum et
              fugias dolorumquam volut quia dolorer ibusdae re velitisimet volo molorempel endam
              secatia num fugias inctorionsed quo bea dendundis denda por simus eatia dolesti bustis
              sincid quaernatur, qui
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              im hil illuptatur, que officiatur? (Kilde: "Erhvervsfremme under Lup, 2016")
            </p>
          </p>
        </Intro>
        <Services />
        <ContactCta />
        <HistoryGrid />
        <section></section>
      </main>
    </>
  );
}

export default Homepage;
