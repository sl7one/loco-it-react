import './benefits-design.scss';
import ico from './images/icons.svg';
import ico1 from './images/icons1.svg';
import ico2 from './images/icons2.svg';
import ico3 from './images/icons3.svg';
import ico4 from './images/icons4.svg';
import ico5 from './images/icons5.svg';

export const BenefitsDesign = () => {
  return (
    <section className="benefits white">
      <div className="container section">
        <h2 className="customers__title">Кому підійде курс?</h2>

        <ul className="benefits-design__list">
          <li className="benefits-design__item">
            <img className="benefits-design__icon" src={ico} alt="ico" />
            <p className="benefits-design__text">
              Професія, що швидко опановується, якщо є почуття смаку
            </p>
          </li>
          <li className="benefits-design__item">
            <img className="benefits-design__icon" src={ico1} alt="ico" />
            <p className="benefits-design__text">
              Попит спеціалістів на ринку праці, який постійно зростає
            </p>
          </li>
          <li className="benefits-design__item">
            <img className="benefits-design__icon" src={ico2} alt="ico" />
            <p className="benefits-design__text">Висока ЗП</p>
          </li>
          <li className="benefits-design__item">
            <img
              className="benefits-design__icon"
              src={ico3}
              alt="ico"
              width={60}
            />
            <p className="benefits-design__text">
              Можливість працювати віддалено
            </p>
          </li>
          <li className="benefits-design__item">
            <img
              className="benefits-design__icon"
              src={ico4}
              alt="ico"
              width={60}
            />
            <p className="benefits-design__text">Участь у цікавих проєктах</p>
          </li>
          <li className="benefits-design__item">
            <img
              className="benefits-design__icon"
              src={ico5}
              alt="glass"
              width={60}
            />
            <p className="benefits-design__text">
              Можливість працювати з відомими брендами
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
