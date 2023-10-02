import Faq from 'react-faq-component';
import questionsData1 from '../../questionsData1';
import questionsData2 from '../../questionsData2';

function Questions() {
  const config = {
    // animate: true,
    arrowIcon: 'V',
    openOnload: 0,
    expandIcon: '+',
    collapseIcon: '-',
  };

  return (
    <section className="questions">
      <Faq data={questionsData1} config={config} />
      <Faq data={questionsData2} config={config} />
    </section>
  );
}

export default Questions;
