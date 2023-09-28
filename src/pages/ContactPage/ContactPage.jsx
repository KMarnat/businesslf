import Banner from '../../components/Banner/Banner';
import bannerImgTwo from '../../assets/bannerImageTwo.avif';
import HistoryGrid from '../../components/HistoryGrid/HistoryGrid';

function ContactPage() {
  return (
    <>
      <Banner source={bannerImgTwo} />
      <main>
        <HistoryGrid />
        <section></section>
      </main>
    </>
  );
}

export default ContactPage;
