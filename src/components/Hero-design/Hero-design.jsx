import './hero-design.scss';
import blur from './images/blur.png';
import planet from './images/Vectary texture.png';
import hat from './images/hat.svg';
import clock from './images/clock.svg';
import wallet from './images/wallet.svg';

export const HeroDesign = () => {
  return (
    <section className="hero box-shadow">
      <div className="hero-design">
        <div className="container section">
          <div>
            <h1 className="hero__title">
              Web & UX/UI <br />
              <span className="hero__title-span">DESIGN</span>
            </h1>

            <p className="hero__descr">Курс веб-дизайна Figma + Prototyping</p>

            <button className="hero__button" type="button">
              ОТРИМАТИ КУРС
            </button>
          </div>

          <ul className="hero-design__list">
            <li className="hero-design__item">
              <img className="hero-design__icon" src={hat} alt="hat" />
              <p className="hero-design__text">
                <span className="hero-desing__text-title">Старт НАВЧАННЯ:</span>
                <span className="hero-design__text-descr">Будь-який час</span>
              </p>
            </li>
            <li className="hero-design__item">
              <img className="hero-design__icon" src={clock} alt="clock" />
              <p className="hero-design__text">
                <span className="hero-desing__text-title">
                  Тривалість навчання:
                </span>
                <span className="hero-design__text-descr">4 місяці</span>
              </p>
            </li>
            <li className="hero-design__item">
              <img className="hero-design__icon" src={wallet} alt="wallet" />
              <p className="hero-design__text">
                <span className="hero-desing__text-title">Ціна:</span>
                <span className="hero-design__text-descr">5000 грн</span>
              </p>
            </li>
          </ul>

          <div className="img-wrapper">
            <div className="img-obj">
              <img
                className="img-obj__blur"
                src={blur}
                alt="blur"
                width="600"
              />

              <img
                className="img-obj__img"
                src={planet}
                alt="laptop"
                width="600"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
