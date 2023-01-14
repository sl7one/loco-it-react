import './courses.scss';
import './smoothScroll';
import symb from './images/symbol.png';
import img1 from './images/0019.png';
import chevron from './images/chevron-down-solid.svg';
import card from './images/product-card__ico.png';

export const Courses = () => {
  return (
    <section className="courses box-shadow">
      <div className="container section">
        <img className="courses__symbol" src={symb} alt="symbol" />
        <div className="courses__hero">
          <img className="courses__hero-img" src={img1} alt="pic" width="440" />
          <div className="courses__hero-meta">
            <h2 className="courses__hero-title">Спробуй та переконайся</h2>
            <p className="courses__hero-text">
              Обери свій курс та почни негайно навчання від LocoIT <br />з
              ментором.
              <span className="courses__hero-text-span">
                {' '}
                Вчись та отримуй фідбек!
              </span>
            </p>
            <a className="courses__hero-link" href="#corsestitle">
              <img src={chevron} alt="chevron" />
              переконатись
            </a>
          </div>
        </div>
        <div className="courses__registration">
          <h3 className="courses__registration-title" id="corsestitle">
            НАШІ КУРСИ
          </h3>
          <ul className="courses__card-list">
            <li className="courses__card">
              <p className="courses__card-header">
                <span className="courses__card-header-left">Безкоштовно</span>
                <span className="courses__card-header-right">UA</span>
              </p>
              <div className="courses__card-wrapper">
                <img
                  className="courses__card-img"
                  src={card}
                  alt="product-card__ico"
                />
                <h4 className="courses__card-title">WEB & UX/UI Design</h4>
                <p className="courses__card-text">Скоро анонс</p>
                <a
                  className="courses__card-details"
                  href={'// eslint-disable-next-line'}
                >
                  ДЕТАЛЬНІШЕ
                </a>
                <a
                  className="courses__card-registration-btn"
                  href={'// eslint-disable-next-line'}
                >
                  РЕЄСТРАЦІЯ
                </a>
              </div>
            </li>
            <li className="courses__card">
              <p className="courses__card-header">
                <span className="courses__card-header-left">Безкоштовно</span>
                <span className="courses__card-header-right">UA</span>
              </p>
              <div className="courses__card-wrapper">
                <img
                  className="courses__card-img"
                  src={card}
                  alt="product-card__ico"
                />
                <h4 className="courses__card-title">WEB & UX/UI Design</h4>
                <p className="courses__card-text">Скоро анонс</p>
                <a
                  className="courses__card-details"
                  href={'// eslint-disable-next-line'}
                >
                  ДЕТАЛЬНІШЕ
                </a>
                <a
                  className="courses__card-registration-btn"
                  href={'// eslint-disable-next-line'}
                >
                  РЕЄСТРАЦІЯ
                </a>
              </div>
            </li>
            <li className="courses__card">
              <p className="courses__card-header">
                <span className="courses__card-header-left">Безкоштовно</span>
                <span className="courses__card-header-right">UA</span>
              </p>
              <div className="courses__card-wrapper">
                <img
                  className="courses__card-img"
                  src={card}
                  alt="product-card__ico"
                />
                <h4 className="courses__card-title">WEB & UX/UI Design</h4>
                <p className="courses__card-text">Скоро анонс</p>
                <a
                  className="courses__card-details"
                  href={'// eslint-disable-next-line'}
                >
                  ДЕТАЛЬНІШЕ
                </a>
                <a
                  className="courses__card-registration-btn"
                  href={'// eslint-disable-next-line'}
                >
                  РЕЄСТРАЦІЯ
                </a>
              </div>
            </li>
            <li className="courses__card">
              <p className="courses__card-header">
                <span className="courses__card-header-left">Безкоштовно</span>
                <span className="courses__card-header-right">UA</span>
              </p>
              <div className="courses__card-wrapper">
                <img
                  className="courses__card-img"
                  src={card}
                  alt="product-card__ico"
                />
                <h4 className="courses__card-title">WEB & UX/UI Design</h4>
                <p className="courses__card-text">Скоро анонс</p>
                <a
                  className="courses__card-details"
                  href={'// eslint-disable-next-line'}
                >
                  ДЕТАЛЬНІШЕ
                </a>
                <a
                  className="courses__card-registration-btn"
                  href={'// eslint-disable-next-line'}
                >
                  РЕЄСТРАЦІЯ
                </a>
              </div>
            </li>
            <li className="courses__card">
              <p className="courses__card-header">
                <span className="courses__card-header-left">Безкоштовно</span>
                <span className="courses__card-header-right">UA</span>
              </p>
              <div className="courses__card-wrapper">
                <img
                  className="courses__card-img"
                  src={card}
                  alt="product-card__ico"
                />
                <h4 className="courses__card-title">WEB & UX/UI Design</h4>
                <p className="courses__card-text">Скоро анонс</p>
                <a
                  className="courses__card-details"
                  href={'// eslint-disable-next-line'}
                >
                  ДЕТАЛЬНІШЕ
                </a>
                <a
                  className="courses__card-registration-btn"
                  href={'// eslint-disable-next-line'}
                >
                  РЕЄСТРАЦІЯ
                </a>
              </div>
            </li>
            <li className="courses__card">
              <p className="courses__card-header">
                <span className="courses__card-header-left">Безкоштовно</span>
                <span className="courses__card-header-right">UA</span>
              </p>
              <div className="courses__card-wrapper">
                <img
                  className="courses__card-img"
                  src={card}
                  alt="product-card__ico"
                />
                <h4 className="courses__card-title">WEB & UX/UI Design</h4>
                <p className="courses__card-text">Скоро анонс</p>
                <a
                  className="courses__card-details"
                  href={'// eslint-disable-next-line'}
                >
                  ДЕТАЛЬНІШЕ
                </a>
                <a
                  className="courses__card-registration-btn"
                  href={'// eslint-disable-next-line'}
                >
                  РЕЄСТРАЦІЯ
                </a>
              </div>
            </li>
            <li className="courses__card">
              <p className="courses__card-header">
                <span className="courses__card-header-left">Безкоштовно</span>
                <span className="courses__card-header-right">UA</span>
              </p>
              <div className="courses__card-wrapper">
                <img
                  className="courses__card-img"
                  src={card}
                  alt="product-card__ico"
                />
                <h4 className="courses__card-title">WEB & UX/UI Design</h4>
                <p className="courses__card-text">Скоро анонс</p>
                <a
                  className="courses__card-details"
                  href={'// eslint-disable-next-line'}
                >
                  ДЕТАЛЬНІШЕ
                </a>
                <a
                  className="courses__card-registration-btn"
                  href={'// eslint-disable-next-line'}
                >
                  РЕЄСТРАЦІЯ
                </a>
              </div>
            </li>
            <li className="courses__card">
              <p className="courses__card-header">
                <span className="courses__card-header-left">Безкоштовно</span>
                <span className="courses__card-header-right">UA</span>
              </p>
              <div className="courses__card-wrapper">
                <img
                  className="courses__card-img"
                  src={card}
                  alt="product-card__ico"
                />
                <h4 className="courses__card-title">WEB & UX/UI Design</h4>
                <p className="courses__card-text">Скоро анонс</p>
                <a
                  className="courses__card-details"
                  href={'// eslint-disable-next-line'}
                >
                  ДЕТАЛЬНІШЕ
                </a>
                <a
                  className="courses__card-registration-btn"
                  href={'// eslint-disable-next-line'}
                >
                  РЕЄСТРАЦІЯ
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
