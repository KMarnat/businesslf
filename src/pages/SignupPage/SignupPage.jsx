import Banner from '../../components/Banner/Banner';
import bannerImgThree from '../../assets/bannerImageThree.avif';
import Intro from '../../components/Intro/Intro';
import UserTiers from '../../components/UserTiers/UserTiers';
import Signup from '../../components/Signup/Signup';

function SignupPage() {
  const tierOptions = [
    { value: 'basis', label: 'Basis medlemsskab' },
    { value: 'vip', label: 'VIP medlemsskab' },
    { value: 'eksternt', label: 'Eksternt medlemsskab' },
  ];

  const textFields = [
    { type: 'text', name: 'FIRMANAVN*' },
    { type: 'text', name: 'KONTAKTPERSON*' },
    { type: 'text', name: 'ADRESSE*' },
    { type: 'number', name: 'POSTNUMBER*' },
    { type: 'text', name: 'BY*' },
    { type: 'text', name: 'HJEMMESIDE' },
    { type: 'email', name: 'EMAIL*' },
    { type: 'number', name: 'ANTAL ANSATTE*' },
    { type: 'number', name: 'ETABLERINGSÅR' },
    { type: 'number', name: 'CVR-NUMMER' },
    { type: 'number', name: 'P-NUMMER' },
  ];

  const registerWelcomeText =
    'Velkommen! Her kan du booke tid til din gratis sparring hos Business Lolland-Falster. Få sparring på din nuværende forretning eller en iværksætter-idé under fuld fortrolighed, som en del af Lolland- og Guldborgsund kommunes erhvervsservice. Der findes ingen dumme spørgsmål.';

  const introParagraph = [
    'Business Lolland-Falster er Lolland-Falsters største erhvervsnetværk. Få adgang til mere end 50 årlige arrangementer, ekspertsparring og et erhvervsnetværk med mere end 400 medlemmer. Vores målsætning er, at du udvikler din virksomhed.',
  ];

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
