import './programm-design.scss';

export const Programm = () => {
  return (
    <section className="programm  box-shadow">
      <div className=" container section">
        <h2 className="programm__title">ПРОГРАМА КУРСУ web & UX/UI DESIGN</h2>
        <div className="programm__form">
          <div className="programm__form-header">
            <p className="programm__form-title">
              25 <span className="programm__form-span">занять</span>
            </p>
            <p className="programm__form-title">
              30 годин
              <span className="programm__form-span">Навчального матеріалу</span>
            </p>
            <p className="programm__form-title">
              Онлайн
              <span className="programm__form-span">Формат навчання</span>
            </p>
          </div>
          <ul className="programm__form-list">
            <li className="programm__form-item">
              {' '}
              <span className="programm__form-item-ico">1</span> Введення в
              дизайн
            </li>
            <li className="programm__form-item">
              {' '}
              <span className="programm__form-item-ico">2</span> Введення в
              дизайн
            </li>
            <li className="programm__form-item">
              {' '}
              <span className="programm__form-item-ico">3</span> Введення в
              дизайн
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
