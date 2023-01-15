import './goals.scss';
import img1 from './images/0010.png';
import img2 from './images/0011.png';

export const Goals = () => {
  return (
    <section className="goals white">
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

      <div className="container section">
        <h2 className="goals__title">Яке буде навчання?</h2>

        <ul className="goals__list">
          <li className="goals__item">
            <div className="wrapper">
              <span className="goals__item-id">1</span>
              <div className="line"></div>
            </div>

            <h3 className="goals__item-title">Теорія</h3>
            <p className="goals__item-text">
              Розбираємо теорію свого курсу за авторськими відеоматеріалами в
              особистому кабінеті
            </p>
          </li>
          <li className="goals__item">
            <span className="goals__item-id">2</span>
            <h3 className="goals__item-title">Практика</h3>
            <p className="goals__item-text">
              Робите практичні завдання післялекції. Розбираєте проблемне
              питання з ментором курсу.
            </p>
          </li>
          <li className="goals__item">
            <span className="goals__item-id">3</span>
            <h3 className="goals__item-title">Поміж занять</h3>
            <p className="goals__item-text">
              Спілкуєтеся з колегами в чаті групи, допомагаєте один одному у
              вирішенні питань, які можуть виникнути під час навчання.
            </p>
          </li>
          <li className="goals__item">
            <span className="goals__item-id">4</span>
            <h3 className="goals__item-title">Результат</h3>
            <p className="goals__item-text">
              Створюєте проект для портфоліо. Отримуєте детальний зворотний
              зв'язок проекту від викладача. Оформлюєте резюме.
            </p>
          </li>
        </ul>
        <img className="goals__img-left" src={img1} alt="pic-left" />
        <img className="goals__img-right" src={img2} alt="pic-right" />
      </div>
    </section>
  );
};
