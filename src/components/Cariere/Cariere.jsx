import './cariere.scss';
import img1 from './images/0012.png';
import img2 from './images/0002.png';
import img3 from './images/0003.png';
import img4 from './images/0018.png';

export const Cariere = () => {
  return (
    <section className="cariere white">
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
        <h2 className="cariere__title">Кому підійде курс?</h2>
        <ul className="cariere__list">
          <li className="cariere__item">
            <img className="cariere__article-icon" src={img1} alt="rocket" />
            <h3 className="cariere__article-title">Ви зараз</h3>
            <p className="cariere__article-descr">Починаємо...</p>
          </li>
          <li className="cariere__item">
            <img className="cariere__article-icon" src={img2} alt="hat" />
            <h3 className="cariere__article-title">JUNIOR</h3>
            <p className="cariere__article-descr">$500-900/міс</p>
          </li>
          <li className="cariere__item">
            <img className="cariere__article-icon" src={img3} alt="tv" />
            <h3 className="cariere__article-title">Middle</h3>
            <p className="cariere__article-descr">$1200-2300/міс</p>
          </li>
          <li className="cariere__item">
            <img className="cariere__article-icon" src={img4} alt="glass" />
            <h3 className="cariere__article-title">Senior</h3>
            <p className="cariere__article-descr">$2500+/міс</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
