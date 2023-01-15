import './customers.scss';
import rocket from './images/Roket 1.png';
import hat from './images/Hat.png';
import tv from './images/TV.png';
import glass from './images/Magnifiying Glass.png';

export const Customers = () => {
  return (
    <section className="customers white">
      <div className="container section">
        <h2 className="customers__title">Кому підійде курс?</h2>
        <ul className="customers__list">
          <li className="customers__item">
            <img
              className="customers__article-icon"
              src={rocket}
              alt="rocket"
            />
            <h3 className="customers__article-title">НОВАЧКАМ</h3>
            <p className="customers__article-descr">
              Ми вчимо з нуля, тому вам не потрібна попередня підготовка та
              технічна освіта. Достатньо бути впевненим користувачем ПК.
            </p>
          </li>
          <li className="customers__item">
            <img className="customers__article-icon" src={hat} alt="hat" />
            <h3 className="customers__article-title">Початківцям в IT</h3>
            <p className="customers__article-descr">
              Якщо у вас є базові навички, наші курси допоможуть структурувати
              їх і отримати комплексний практичний досвід на реальних прикладах.
            </p>
          </li>
          <li className="customers__item">
            <img className="customers__article-icon" src={tv} alt="tv" />
            <h3 className="customers__article-title">IT-Спеціалістам</h3>
            <p className="customers__article-descr">
              Курси будуть цікавими та корисними навіть людям з досвідом. Ви
              вивчите сучасні інструменти та фреймворки, підвищите свою
              кваліфікацію.
            </p>
          </li>
          <li className="customers__item">
            <img className="customers__article-icon" src={glass} alt="glass" />
            <h3 className="customers__article-title">
              КОРпоравтиним замовникам
            </h3>
            <p className="customers__article-descr">
              Адаптуємо наші програми та графік навчання під ваші вимоги для
              отримання максимального результату.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
