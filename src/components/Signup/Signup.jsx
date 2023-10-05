import Button from '../../components/Button/Button';

function Signup({
  tierOptions,
  textFields,
  paragraph,
  title,
  textAreaLabel,
  buttonText,
  modifier,
  children,
}) {
  return (
    <section className="signup" data-scroll-section>
      <div
        className="signup__content"
        data-scroll
        data-scroll-speed="2"
        data-scroll-class="fade-in-element"
      >
        <div className="signup__welcome">
          <h2>{title}</h2>
          <p>{paragraph}</p>
        </div>
        <p className="signup__tier">VÆLG MEDLEMSSKAB*</p>
        <form className="form">
          {/* Radio buttons to select account tier */}
          {tierOptions &&
            tierOptions.map((tier, i) => (
              <label className="form__tier" key={i}>
                <input type="radio" name="tier" value={tier.value} />
                {tier.label}
              </label>
            ))}
          {/* //////////////////////////////////////////////////////////// */}
          {/* Text fields */}
          {textFields.map((field, i) => (
            <label className="form__label" key={i}>
              {field.name}
              <input type="text" />
            </label>
          ))}
          {/* //////////////////////////////////////////////////////////// */}
          {/* Text area */}
          <label htmlFor="" className="form__label form__label--big">
            {textAreaLabel}
            <textarea name="" id="" rows="5"></textarea>
          </label>
          {/* //////////////////////////////////////////////////////////// */}
          {children}
          <Button modifier={modifier}>{buttonText}</Button>
        </form>
      </div>
    </section>
  );
}

export default Signup;
