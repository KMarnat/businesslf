import serviceOne from '../../assets/serviceOne.avif';
import serviceTwo from '../../assets/serviceTwo.avif';

function Services() {
  return (
    <section className="services" data-scroll-section>
      <div
        className="services__grid"
        data-scroll
        data-scroll-repeat={true}
        data-scroll-speed="5"
        data-scroll-class="fade-in-element"
      >
        <div className="adaptive services__image">
          <div className="adaptive-photo">
            <img src={serviceOne} alt="services" />
          </div>
        </div>
        <div className="services__paragraphs">
          <p>
            Falder indtjeningen eller har din virksomhed potentiale til mere? Vores og vores
            samarbejdspartneres (Erhvervshus Sjælland m.fl.) værktøjskasser er fuld af effektive
            ydelser, som allerede har gjort en forskel for mange andre virksomheder.
          </p>
          <p>Kontakt forretningsudvikler Claus Madelung og bliv klogere på dine muligheder.</p>
        </div>
        <div className="adaptive services__image">
          <div className="adaptive-photo">
            <img src={serviceTwo} alt="services" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
