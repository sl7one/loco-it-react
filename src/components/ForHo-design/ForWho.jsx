import './forwho.scss';
import person1 from './images/person1.png';
import person2 from './images/person2.png';
import person3 from './images/person3.png';
import person4 from './images/person4.png';
import person5 from './images/person5.png';
import q from './images/q.png';

export const ForWho = () => {
  return (
    <section className="forwho white">
      <ul className="run-text-left">
        <li>
          Loco<span className="run-text-left__color">IT</span>
        </li>
        <li>
          Loco<span className="run-text-left__color">IT</span>
        </li>
        <li>
          Loco<span className="run-text-left__color">IT</span>
        </li>
        <li>
          Loco<span className="run-text-left__color">IT</span>
        </li>
        <li>
          Loco<span className="run-text-left__color">IT</span>
        </li>
        <li>
          Loco<span className="run-text-left__color">IT</span>
        </li>
        <li>
          Loco<span className="run-text-left__color">IT</span>
        </li>
        <li>
          Loco<span className="run-text-left__color">IT</span>
        </li>
      </ul>
      <div className="container section">
        <h2 className="forwho__title">ДЛЯ кого курс?</h2>
        <p className="forwho__after-title">Цей курс ідеально підійде для</p>
        <ul className="forwho__list">
          <li className="forwho__item">
            <span className="forwho__span"> Дизайнерів-початківців</span>

            <img className="forwho__img" src={person1} alt="pic" id={1} />
          </li>
          <li className="forwho__item">
            <span className="forwho__span"> Верстальників </span>

            <img className="forwho__img" src={person2} alt="pic" id={2} />
          </li>
          <li className="forwho__item">
            <span className="forwho__span"> Інтернет-маркетологів</span>
            <img className="forwho__img" src={person3} alt="pic" id={3} />
          </li>
          <li className="forwho__item">
            <span className="forwho__span"> Контент-менеджерів </span>

            <img className="forwho__img" src={person4} alt="pic" id={4} />
          </li>
          <li className="forwho__item">
            <span className="forwho__span"> Власників малого бізнесу</span>

            <img className="forwho__img" src={person5} alt="pic" id={5} />
          </li>
        </ul>
        <img className="forwho__q" src={q} alt="q" />
      </div>
      <ul className="run-text">
        <li>
          Loco<span className="run-text__color">IT</span>
        </li>
        <li>
          Loco<span className="run-text__color">IT</span>
        </li>
        <li>
          Loco<span className="run-text__color">IT</span>
        </li>
        <li>
          Loco<span className="run-text__color">IT</span>
        </li>
        <li>
          Loco<span className="run-text__color">IT</span>
        </li>
        <li>
          Loco<span className="run-text__color">IT</span>
        </li>
        <li>
          Loco<span className="run-text__color">IT</span>
        </li>
        <li>
          Loco<span className="run-text__color">IT</span>
        </li>
      </ul>
    </section>
  );
};
