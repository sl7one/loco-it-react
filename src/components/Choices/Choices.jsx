import './choices.scss';
import hum1 from './images/human_first 1.png';
import hum2 from './images/human_second 1.png';

export const Choices = () => {
  return (
    <section className="choices box-shadow">
      <img className="choices__img-left" src={hum1} alt="human-left" />
      <img className="choices__img-right" src={hum2} alt="human-right" />

      <div className="container sectoin">
        <h2 className="choices__title">
          ВАрто обрати <span className="choices__span">LOCO</span>, бо
        </h2>
        <ul className="choices__list">
          <li className="choices__item">
            <span className="choices__item-id">1</span>
            <h3 className="choices__item-title">ВЧИМО на практиці</h3>
            <p className="choices__item-text">
              Протягом усього курсу потрібно буде виконувати багато практичних
              завдань для закріплення теорії. <br />
              <br />
              Наприкінці курсу ви створите проект, який стане частиною
              портфоліо.
            </p>
          </li>
          <li className="choices__item">
            <span className="choices__item-id">2</span>
            <h3 className="choices__item-title">ВЧИСЬ У СВОЄМУ ТЕМПІ</h3>
            <p className="choices__item-text">
              У кожного з нас є власне життя зі своєю рутиною і ми це розуміємо.
              Тому в LocoIT є можливість навчатись асинхронно. <br />
              <br />
              Переглядайте лекції та виконуйте домашнє завдання у зручний для
              вас час та отримуйте фідбек.
            </p>
          </li>
          <li className="choices__item">
            <span className="choices__item-id">3</span>
            <h3 className="choices__item-title">
              Допомагаємо з працевлаштуванням
            </h3>
            <p className="choices__item-text">
              Усіх випускників, після завершення курсу, особисто консультуємо та
              допомагаємо з працевлашутванням.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
