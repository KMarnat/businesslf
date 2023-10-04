import TimeAndPlace from '../TimeAndPlace/TimeAndPlace';

function Intro({ subHeading, heading, modifier, paragraph, children }) {
  const routeName = window.location.pathname;
  return (
    <section className="intro" data-scroll-section>
      <div className={`intro__content ${modifier}`} data-scroll data-scroll-speed="2">
        {routeName === '/contact' ? (
          <>
            <div className="intro__content--small">
              <h4 data-scroll>{subHeading}</h4>
              <h2 data-scroll>{heading}</h2>
              {paragraph.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {children}
            </div>
            <TimeAndPlace />
          </>
        ) : (
          <>
            <h4>{subHeading}</h4>
            <h2>{heading}</h2>
            {paragraph.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </>
        )}
      </div>
    </section>
  );
}

export default Intro;
