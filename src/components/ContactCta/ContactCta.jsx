import Button from '../Button/Button';

function ContactCta() {
  return (
    <section className="cta" data-scroll-section>
      <div
        className="cta__content"
        data-scroll-repeat={true}
        data-scroll-speed="4"
        data-scroll
        data-scroll-class="fade-in-element"
      >
        <h1>Lorum impsum dolor</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button modifier={'primary'}>KONTAKT</Button>
      </div>
    </section>
  );
}

export default ContactCta;
