import './preferense.scss';
import blur from './images/blur.png';
import pc from './images/pc.png';
import mark from './images/mark.svg';

export const Preferense = () => {
  return (
    <section className="preference section box-shadow">
      <div className="wrapper container">
        <div className="preference__img-wrap">
          <img className="preference__img-blur" src={blur} alt="pc-blur" />
          <img className="preference__img" src={pc} alt="pc" />
        </div>
        <div className="meta-data">
          <h2 className="preference__title">ЧОМУ САМЕ IT?</h2>
          <ul className="preference__list">
            <li className="preference__item">
              <img className="preference__item-icon" src={mark} alt="mark" />
              <p className="preference__item-text">
                Попит на фахівців у всьому світі
              </p>
            </li>
            <li className="preference__item">
              <img className="preference__item-icon" src={mark} alt="mark" />
              <p className="preference__item-text">Висока заробітна плата</p>
            </li>
            <li className="preference__item">
              <img className="preference__item-icon" src={mark} alt="mark" />
              <p className="preference__item-text">
                Можливість працювати віддалено
              </p>
            </li>
            <li className="preference__item">
              <img className="preference__item-icon" src={mark} alt="mark" />
              <p className="preference__item-text">
                Вільний графік, соц. пакети та інші бонуси від компаній
              </p>
            </li>
            <li className="preference__item">
              <img className="preference__item-icon" src={mark} alt="mark" />
              <p className="preference__item-text">
                Можливість працювати самому на себе
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
