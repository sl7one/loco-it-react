import './header.scss';
import logo from './img/logo.svg';
import find from './img/find.svg';
import phone from './img/phone.svg';

export const Header = () => {
  return (
    <header className="header">
      <div>
        <div className="header__wrapper">
          <div className="logo">
            <div className="logo__icon">
              <img src={logo} alt="logo" width="50" />
            </div>
            <span className="logo__loco">Loco</span>
            <span className="logo__it">IT</span>
          </div>
          <nav className="nav">
            <ul className="nav__list">
              <li className="nav__item">
                <button className="nav__icon" type="button">
                  <img src={find} alt="login" />
                </button>
              </li>
              <li className="nav__item">
                <a className="nav__link" href={'// eslint-disable-next-line'}>
                  Курси
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href={'// eslint-disable-next-line'}>
                  Працевлаштування
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href={'// eslint-disable-next-line'}>
                  Ціни
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link" href={'// eslint-disable-next-line'}>
                  Контакти
                </a>
              </li>
            </ul>
          </nav>
          <div className="nav-buttons">
            <button className="nav-buttons__btn" type="button">
              ЗАПИСАТИСЯ
            </button>
            <button className="nav-buttons__btn styled" type="button">
              <img className="nav-buttons__icon" src={phone} alt="phone" />
              ПЕРЕДЗВОНІТЬ МЕНІ
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
