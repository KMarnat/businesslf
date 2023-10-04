import historyImg from '../../assets/history.avif';

function HistoryGrid() {
  return (
    <section className="history" data-scroll-section>
      <div className="history__grid">
        <div className="history__image adaptive ">
          <div className="adaptive-photo">
            <img src={historyImg} alt="" />
          </div>
        </div>
        <div className="history__image adaptive ">
          <div className="adaptive-photo">
            <img
              src="https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="history__image adaptive ">
          <div className="adaptive-photo">
            <img
              src="https://images.unsplash.com/photo-1515325595179-59cd5262ca53?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
              alt=""
            />
          </div>
        </div>
        <div className="history__image adaptive ">
          <div className="adaptive-photo">
            <img
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
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
        <div className="history__image adaptive ">
          <div className="adaptive-photo">
            <img
              src="https://images.unsplash.com/photo-1491841651911-c44c30c34548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HistoryGrid;
