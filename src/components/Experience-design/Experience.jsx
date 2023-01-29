import './experience.scss';

import mark from './images/mark.png';
import ico1 from './images/ico1.svg';
import ico2 from './images/ico2.svg';
import ico3 from './images/ico3.svg';
import ico4 from './images/ico4.svg';
import ico5 from './images/ico5.svg';
import ico6 from './images/ico6.svg';

export const Experience = () => {
  return (
    <section className="preference section box-shadow">
      <div className="skills">
        <div className="wrapper container">
          <div className="meta-data">
            <h2 className="preference__title">
              Що ти зможеш після курсу web & UX/UI DESIGN ?
            </h2>
            <ul className="preference__list">
              <li className="preference__item">
                <img className="preference__item-icon" src={mark} alt="mark" />
                <p className="preference__item-text">
                  Впевнено користуватися Figma
                </p>
              </li>
              <li className="preference__item">
                <img className="preference__item-icon" src={mark} alt="mark" />
                <p className="preference__item-text">Працювати із замовником</p>
              </li>
              <li className="preference__item">
                <img className="preference__item-icon" src={mark} alt="mark" />
                <p className="preference__item-text">
                  Створювати бриф та проектувати веб-інтерфейси
                </p>
              </li>
              <li className="preference__item">
                <img className="preference__item-icon" src={mark} alt="mark" />
                <p className="preference__item-text">
                  Презентувати створений проект
                </p>
              </li>
              <li className="preference__item">
                <img className="preference__item-icon" src={mark} alt="mark" />
                <p className="preference__item-text">
                  Передавати макет верстальнику
                </p>
              </li>
            </ul>
          </div>
          <ul className="skills__list">
            <li className="skills__item">
              <img className="skills__icon" src={ico1} alt="icon" />
            </li>
            <li className="skills__item">
              <img className="skills__icon" src={ico2} alt="icon" />
            </li>
            <li className="skills__item">
              <img className="skills__icon" src={ico3} alt="icon" />
            </li>
            <li className="skills__item">
              <img className="skills__icon" src={ico4} alt="icon" />
            </li>
            <li className="skills__item">
              <img className="skills__icon" src={ico5} alt="icon" />
            </li>
            <li className="skills__item">
              <img className="skills__icon" src={ico6} alt="icon" />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
