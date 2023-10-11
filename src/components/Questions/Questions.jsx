import Faq from 'react-faq-component';
import questionsData1 from '../../questionsData1';
import questionsData2 from '../../questionsData2';

function Questions() {
  const config = {
    arrowIcon: 'V',
    openOnload: 0,
    expandIcon: '+',
    collapseIcon: '-',
  };

  return (
    <section className="questions" data-scroll-section data-scroll-class="fade-in-element">
      <h2 className="questions__title" data-scroll data-scroll-speed="2">
        Værd at vide
      </h2>
      <div className="questions__group" data-scroll data-scroll-speed="2">
        <div className="questions__one">
          <Faq data={questionsData1} config={config} />
        </div>
        <div className="questions__two">
          <Faq data={questionsData2} config={config} />
        </div>
      </div>
    </section>
  );
}

export default Questions;
