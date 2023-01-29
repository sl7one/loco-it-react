import './cariere-design.scss';
import img1 from './images/0012.png';

export const CariereDesign = () => {
  return (
    <section className="cariere-design white">
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
        <img className="cariere__img" src={img1} alt="img" />

        <div className="cariere__block">
          <h2 className="cariere__title">Що таке WEB DESIGN?</h2>
          <p className="cariere__text">
            <span className="cariere__span">Веб-дизайнер</span> — це фахівець,
            який відповідає за те, як виглядає і створюється Інтернет-сайт.{' '}
            <br /> <br /> Він придумує логотипи, банери та інші елементи
            графіки, продумує навігацію сайту та визначає, де слід розмістити
            текст і зображення. <br /> <br /> Результати роботи Web-дизайнера
            передаються Front-End розробникам і вони перетворюють макет на
            робочий сайт.
          </p>
        </div>
      </div>
    </section>
  );
};
