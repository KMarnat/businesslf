import historyImg from '../../assets/history.avif';

function HistoryGrid() {
  return (
    <section className="history">
      <div className="history__grid">
        <div className="adaptive ">
          <div className="adaptive-photo">
            <img src={historyImg} alt="" />
          </div>
        </div>
        <div className="adaptive ">
          <div className="adaptive-photo">
            <img src={historyImg} alt="" />
          </div>
        </div>
        <div className="adaptive ">
          <div className="adaptive-photo">
            <img src={historyImg} alt="" />
          </div>
        </div>
        <div className="adaptive ">
          <div className="adaptive-photo">
            <img src={historyImg} alt="" />
          </div>
        </div>
        <div className="history__description">
          <h3>
            TEMAHISTORIE <br /> OVERSKRIFT
          </h3>
          <p>
            Erum rest, aut dolore nem haria voloritatat. Ibus voloria sum que pelic tecerio. Et
            esedit eos deles debistem voluptint asperumqui que consero quam volora quat.
          </p>
        </div>
        <div className="adaptive ">
          <div className="adaptive-photo">
            <img src={historyImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistoryGrid;
