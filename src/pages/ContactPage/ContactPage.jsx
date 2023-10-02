import Banner from '../../components/Banner/Banner';
import bannerImgTwo from '../../assets/bannerImageTwo.avif';
import HistoryGrid from '../../components/HistoryGrid/HistoryGrid';
import Intro from '../../components/Intro/Intro';
import Signup from '../../components/Signup/Signup';
import Questions from '../../components/Questions/Questions';
import Quote from '../../components/Quote/Quote';

function ContactPage() {
  const textFields = [
    { type: 'text', name: 'FIRMANAVN*' },
    { type: 'email', name: 'KONTAKTPERSON*' },
    { type: 'password', name: 'ADRESSE*' },
    { type: 'password', name: 'POSTNUMBER*' },
    { type: 'password', name: 'BY*' },
  ];

  const registerWelcomeText =
    'Velkommen! Her kan du booke tid til din gratis sparring hos Business Lolland-Falster. Få sparring på din nuværende forretning eller en iværksætter-idé under fuld fortrolighed, som en del af Lolland- og Guldborgsund kommunes erhvervsservice. Der findes ingen dumme spørgsmål.';

  const introParagraph = [
    'Har du planer om at starte din egen virksomhed eller er du iværksætter der har brug for indspark i forhold til at udvikle din virksomhed? Business Days er vores gratis rådgivningsdage for dig som overvejer at tage springet som selvstændig eller er påbegyndt rejsen som iværksætter og har brug for sparring eller rådgivning.',
    'Business Days er gratis men kræver tilmelding. Send os dine kontaktoplysninger samt en beskrivelse af din udfordring via formularen nedenfor.',
  ];

  return (
    <>
      <Banner source={bannerImgTwo} />
      <main>
        <Intro
          modifier={'intro__content--modified'}
          subHeading={'GRATIS TILBUD'}
          heading={`Bliv klogere på e-handel`}
          paragraph={introParagraph}
        >
          <h5>HVAD KAN MAN FÅ HJÆLP TIL?</h5>
          <ul>
            <li>Forretningsudvikling</li>
            <li>Juridisk vejleding</li>
            <li>Revision</li>
            <li>Kommunikation</li>
            <li>Salg</li>
          </ul>
        </Intro>
        <Signup
          textFields={textFields}
          title={'Tilmelding til Business Day'}
          paragraph={registerWelcomeText}
          textAreaLabel={'BESKRIV DIN IDÉ, OG HVAD DU GERNE VIL HAVE HJÆLP TIL ...'}
          buttonText={'Tilmeld'}
          modifier={'secondary'}
        >
          <p className="signup__message">
            Når du trykker &apos;Tilmeld&apos; sendes din besked til Business Lolland-Falster, som
            hurtigst muligt vil vende tilbage angående feedback på din idé og praktiske detaljer om
            en sparring. Ligeledes vil du modtage erhvervsnyheder på mail, som du altid kan framelde
            dig igen.
          </p>
        </Signup>
        <Questions />
        <Quote />
        <HistoryGrid />
      </main>
    </>
  );
}

export default ContactPage;
