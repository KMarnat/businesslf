import Banner from '../../components/Banner/Banner';
import bannerImgThree from '../../assets/bannerImageThree.avif';
import Intro from '../../components/Intro/Intro';
import UserTiers from '../../components/UserTiers/UserTiers';
import Signup from '../../components/Signup/Signup';

import { tierOptions } from '../../utils/signuppageutils';
import { textFields } from '../../utils/signuppageutils';
import { registerWelcomeText } from '../../utils/signuppageutils';
import { introParagraph } from '../../utils/signuppageutils';

function SignupPage() {
  return (
    <>
      <Banner source={bannerImgThree} />
      <main>
        <Intro
          subHeading={'INTROTEKST'}
          heading={
            'TEM QUI UT QUIS VERRO VOLOREM ILIC TE DOLORRO REMPOREPRA DUCIA PORIO TEM SINCI ALIT ODISUT A DOLU'
          }
          paragraph={introParagraph}
        ></Intro>
        <UserTiers />
        <Signup
          tierOptions={tierOptions}
          textFields={textFields}
          paragraph={registerWelcomeText}
          title={'Bliv medlem'}
          textAreaLabel={'KORT BESKRIVELSE AF VIRKSOMHEDEN...'}
          buttonText={'Send'}
          modifier={'primary'}
        />
      </main>
    </>
  );
}

export default SignupPage;
