import Button from '../Button/Button';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__cell">
          <h4>NYT FRA LOLLAND-FALSTER</h4>
          <p>
            Tilmeld dig vores nyhedsbrev og få informationer om lokale erhvervs- og turismeforhold
            samt om vores aktiviteter, kurser m.v.
          </p>
          <div className="footer__buttons">
            <Button modifier={'secondary'}>TILMELD NYHEDSBREV</Button>
            <Button modifier={'secondary'}>TILMELD TURISMENYT</Button>
          </div>
        </div>
        <div className="footer__cell">
          <p>
            <strong>Udviklingsmiljø Nykøbing F.</strong>
            <br />
            Slotsbryggen 14 A-D DK-4800 Nykøbing F.
          </p>
          <p>
            <strong>Udviklingsmiljø Nakskov.</strong>
            <br />
            Axeltorv 2, st., DK-4900 Nakskov
          </p>
          <p>
            <strong>Embassy of Lolland-Falster</strong>
            <br />
            Flæsketorvet 68, 1., DK-1711 København V.
          </p>
        </div>
        <div className="footer__cell">
          <h4>
            BUSINESS
            <br /> LOLLAND-FALSTER
          </h4>
          <div className="footer__contact">
            <p>Kidnakken 7, DK-4930 Maribo</p>
            <p>CVR 33506929</p>
            <p>Tlf: +45 7022 8901</p>
            <p>info@businesslf.dk</p>
          </div>
          <h3>
            Business <br /> Lolland-Falser
          </h3>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
