import './hero.scss';
import blur from './images/blur.png';
import planet from './images/Vectary texture.png';

export const Hero = () => {
  return (
    <section className="hero box-shadow">
      <div className="section container">
        <h1 className="hero__title">
          Loco<span className="hero__title-span">IT</span>
        </h1>

        <p className="hero__descr">
          курси для того, щоб змінити <br />
          твоє <span className="hero__descr-span">життя</span>
        </p>

        <button className="hero__button" type="button">
          ХОЧУ ВЧИТИСЬ
        </button>

        <div className="img-wrapper">
          <div className="img-obj">
            <img className="img-obj__blur" src={blur} alt="blur" width="600" />
            <img
              className="img-obj__img"
              src={planet}
              alt="laptop"
              width="600"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
