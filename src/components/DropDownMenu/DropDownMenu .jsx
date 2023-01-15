import { useState } from 'react';
import { createPortal } from 'react-dom';
import './dropDownMenu.scss';

export const DropDownMenu = ({ onClickBackdrop }) => {
  // eslint-disable-next-line
  const [activeClass, _] = useState(false);
  const [course, setCourse] = useState('design');

  const onClick = event => {
    // console.log(event.target.dataset.item);
    if (!event.target.dataset.item) return;
    setCourse(event.target.dataset.item);
    switch (event.target.dataset.item) {
      case 'design':
        document
          .querySelector('[data-item="develop"]')
          .classList.remove('active');
        document.querySelector('[data-item="design"]').classList.add('active');
        break;
      case 'develop':
        document
          .querySelector('[data-item="design"]')
          .classList.remove('active');
        document.querySelector('[data-item="develop"]').classList.add('active');
        break;
      default:
        console.log('object');
    }
  };
  const closeBackdrop = event => {
    if (event.target.id === 'backdrop') onClickBackdrop();
  };
  return createPortal(
    <div className="backdrop" onClick={closeBackdrop} id="backdrop">
      <div className="ddm">
        <ul className="ddm__nav-list" onClick={onClick}>
          <li
            className={activeClass ? 'ddm__nav-item active' : 'ddm__nav-item'}
            data-item="design"
          >
            <span data-item="design">Дизайн</span>
          </li>
          <li
            className={activeClass ? 'ddm__nav-item active' : 'ddm__nav-item'}
            data-item="develop"
          >
            <span data-item="develop"> Розробка </span>
          </li>
        </ul>
        {course === 'design' && (
          <ul className="ddm__cont-list">
            <li className="ddm__cont-item">
              <p className="ddm__cont-item-wrap">
                <span>WEB & UX/UI Design</span>
                <span>Старт курсу:</span>
              </p>
              <p className="ddm__cont-item-wrap">
                <span>Figma + Prototyping</span>
                <span>Скоро анонс</span>
              </p>
            </li>
            <li className="ddm__cont-item">
              <p className="ddm__cont-item-wrap">
                <span>Графічний дизайн</span>
                <span>Старт курсу:</span>
              </p>
              <p className="ddm__cont-item-wrap">
                <span>Логотипи Графіка та Типографіка</span>
                <span>Скоро анонс</span>
              </p>
            </li>
            <li className="ddm__cont-item">
              <p className="ddm__cont-item-wrap">
                <span>Motion Design</span>
                <span>Старт курсу:</span>
              </p>
              <p className="ddm__cont-item-wrap">
                <span>Логотипи Графіка та Типографіка</span>
                <span>Скоро анонс</span>
              </p>
            </li>
          </ul>
        )}

        {course === 'develop' && (
          <ul className="ddm__cont-list">
            <li className="ddm__cont-item">
              <p className="ddm__cont-item-wrap">
                <span>Front End Development</span>
                <span>Старт курсу:</span>
              </p>
              <p className="ddm__cont-item-wrap">
                <span>Figma + Prototyping</span>
                <span>Скоро анонс</span>
              </p>
            </li>
            <li className="ddm__cont-item">
              <p className="ddm__cont-item-wrap">
                <span>Графічний дизайн</span>
                <span>Старт курсу:</span>
              </p>
              <p className="ddm__cont-item-wrap">
                <span>Логотипи Графіка та Типографіка</span>
                <span>Скоро анонс</span>
              </p>
            </li>
            <li className="ddm__cont-item">
              <p className="ddm__cont-item-wrap">
                <span>Motion Design</span>
                <span>Старт курсу:</span>
              </p>
              <p className="ddm__cont-item-wrap">
                <span>Логотипи Графіка та Типографіка</span>
                <span>Скоро анонс</span>
              </p>
            </li>
          </ul>
        )}
      </div>
    </div>,
    document.querySelector('#drop-down-root')
  );
};
