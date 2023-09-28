import Banner from '../../components/Banner/Banner';
import bannerImgThree from '../../assets/bannerImageThree.avif';
import Intro from '../../components/Intro/Intro';

function SignupPage() {
  return (
    <>
      <Banner source={bannerImgThree} />
      <main>
        <Intro>
          <p>
            Business Lolland-Falster er Lolland-Falsters største erhvervsnetværk. Få adgang til mere
            end 50 årlige arrangementer, ekspertsparring og et erhvervsnetværk med mere end 400
            medlemmer. Vores målsætning er, at du udvikler din virksomhed.
          </p>
        </Intro>
        <section></section>
      </main>
    </>
  );
}

export default SignupPage;
