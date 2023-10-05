function UserTierSingle({ title, slogan, price, description, modifier, children }) {
  return (
    <article
      className={`singletier ${modifier}`}
      data-scroll
      data-scroll-speed="3"
      data-scroll-class="fade-in-element"
    >
      <h2 className="singletier__title">{title} Medlemsskab</h2>
      <p className="singletier__slogan">{slogan}</p>
      <ul className="singletier__benefits">{children}</ul>
      <h4 className="singletier__price">
        Pris for medlesskab <br />
        kr. {price} pr. år
      </h4>
      <p className="singletier__description">{description}</p>
    </article>
  );
}

export default UserTierSingle;
