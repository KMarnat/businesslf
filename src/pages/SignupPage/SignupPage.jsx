import Banner from '../../components/Banner/Banner';
import bannerImgThree from '../../assets/bannerImageThree.avif';
import Intro from '../../components/Intro/Intro';
import UserTiers from '../../components/UserTiers/UserTiers';
import Signup from '../../components/Signup/Signup';

function SignupPage() {
  return (
    <>
      <Banner source={bannerImgThree} />
      <main>
        <Intro heading={'INTROTEKST'}>
          <h2>
            TEM QUI UT QUIS VERRO VOLOREM ILIC TE DOLORRO REMPOREPRA DUCIA PORIO TEM SINCI ALIT ODIS
            UT A DOLU
          </h2>
          <p>
            Business Lolland-Falster er Lolland-Falsters største erhvervsnetværk. Få adgang til mere
            end 50 årlige arrangementer, ekspertsparring og et erhvervsnetværk med mere end 400
            medlemmer. Vores målsætning er, at du udvikler din virksomhed.
          </p>
        </Intro>
        <UserTiers />
        <Signup />
      </main>
    </>
  );
}

export default SignupPage;
