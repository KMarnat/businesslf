import Button from '../../components/Button/Button';

function Signup() {
  return (
    <section className="signup">
      <div className="signup__content">
        <div className="signup__welcome">
          <h2>Bliv medlem</h2>
          <p>
            Velkommen! Her kan du booke tid til din gratis sparring hos Business Lolland-Falster. Få
            sparring på din nuværende forretning eller en iværksætter-idé under fuld fortrolighed,
            som en del af Lolland- og Guldborgsund kommunes erhvervsservice. Der findes ingen dumme
            spørgsmål.
          </p>
        </div>
        <p className="signup__tier">VÆLG MEDLEMSSKAB*</p>
        <form className="form">
          {/* Radio buttons to select account tier */}
          <label className="form__tier">
            <input type="radio" name="tier" value="Basis" />
            Basis medlemsskab
          </label>
          <label className="form__tier">
            <input type="radio" name="tier" value="VIP" />
            VIP medlemsskab
          </label>
          <label className="form__tier">
            <input type="radio" name="tier" value="Eksternt" />
            Eksternt medlemsskab
          </label>
          {/* //////////////////////////////////////////////////////////// */}
          <label htmlFor="" className="form__label">
            FIRMANAVN*
            <input type="text" name="" id="" />
          </label>

          <label htmlFor="" className="form__label">
            KONTAKTPERSON*
            <input type="text" name="" id="" />
          </label>

          <label htmlFor="" className="form__label">
            ADRESSE*
            <input type="text" name="" id="" />
          </label>

          <label htmlFor="" className="form__label">
            POSTNUMBER*
            <input type="text" name="" id="" />
          </label>

          <label htmlFor="" className="form__label">
            BY*
            <input type="text" name="" id="" />
          </label>

          <label htmlFor="" className="form__label">
            TELEFON*
            <input type="text" name="" id="" />
          </label>

          <label htmlFor="" className="form__label">
            HJEMMESIDE
            <input type="text" name="" id="" />
          </label>

          <label htmlFor="" className="form__label">
            EMAIL*
            <input type="text" name="" id="" />
          </label>

          <label htmlFor="" className="form__label">
            ANTAL ANSATTE*
            <input type="text" name="" id="" />
          </label>

          <label htmlFor="" className="form__label">
            ETABLERINGSÅR
            <input type="text" name="" id="" />
          </label>

          <label htmlFor="" className="form__label">
            CVR-NUMMER
            <input type="text" name="" id="" />
          </label>

          <label htmlFor="" className="form__label">
            P-NUMMER
            <input type="text" name="" id="" />
          </label>

          <label htmlFor="" className="form__label form__label--big">
            KORT BESKRIVELSE AF VIRKSOMHEDEN...
            <textarea name="" id="" rows="5"></textarea>
          </label>
          <Button modifier={'primary'}>Send</Button>
        </form>
      </div>
    </section>
  );
}

export default Signup;
