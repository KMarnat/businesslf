function Intro({ heading, modifier, children }) {
  return (
    <section className="intro">
      <div className={`intro__content ${modifier}`}>
        <h4>{heading}</h4>
        {children}
      </div>
    </section>
  );
}

export default Intro;
