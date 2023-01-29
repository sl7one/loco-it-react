import { useState } from 'react';
import './forwho.scss';
import person1 from './images/person1.png';
import person2 from './images/person2.png';
import person3 from './images/person3.png';
import person4 from './images/person4.png';
import person5 from './images/person5.png';
import q from './images/q.png';

export const ForWho = () => {
  const [id, setId] = useState(false);
  const onMouseEnter = event => {
    setId(event.currentTarget.id);
  };
  const onMouseLeave = () => {
    setId(false);
  };
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
          <li
            className="forwho__item"
            id={1}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <span className="forwho__span"> Дизайнерів-початківців</span>
            {id === '1' ? (
              <img className="forwho__img" src={person1} alt="pic" id={1} />
            ) : null}
          </li>
          <li
            className="forwho__item"
            id={2}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <span className="forwho__span"> Верстальників </span>
            {id === '2' ? (
              <img className="forwho__img" src={person2} alt="pic" id={2} />
            ) : null}
          </li>
          <li
            className="forwho__item"
            id={3}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <span className="forwho__span"> Інтернет-маркетологів</span>
            {id === '3' ? (
              <img className="forwho__img" src={person3} alt="pic" id={3} />
            ) : null}
          </li>
          <li
            className="forwho__item"
            id={4}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <span className="forwho__span"> Контент-менеджерів </span>
            {id === '4' ? (
              <img className="forwho__img" src={person4} alt="pic" id={4} />
            ) : null}
          </li>
          <li
            className="forwho__item"
            id={5}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <span className="forwho__span"> Власників малого бізнесу</span>

            {id === '5' ? (
              <img className="forwho__img" src={person5} alt="pic" id={5} />
            ) : null}
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
