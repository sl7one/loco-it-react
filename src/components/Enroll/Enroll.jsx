import Input from 'react-phone-number-input/input';
import { useState } from 'react';
import './enroll.scss';
import phone from './images/phone.svg';
import img from './images/0002.png';

import 'react-phone-number-input/style.css';

export const Enroll = () => {
  const [value, setValue] = useState();

  return (
    <section className="enroll white">
      <div className="container section">
        <div className="enroll__wrapper">
          <h2 className="enroll__title"> Записуйся на IT-курси від LOCO! </h2>
          <p className="enroll__descr">
            Якщо у вас залишились питання щодо навчання або ви хочете отримати
            додаткову консультацію з приводу того як почати навчання, то
            залишайте заявку нижче й наш менеджер зв’яжеться з вами найближчим
            часом!
          </p>
          <div className="enroll__call-form">
            <Input
              className="enroll__call-form-input"
              country="UA"
              international
              withCountryCallingCode
              value={value}
              onChange={setValue}
            />
            <button className="enroll__call-form-btn" type="button">
              <img className="enroll__icon" src={phone} alt="phone" /> Залишити
              заявку
            </button>
          </div>
        </div>
        <img src={img} alt="pic" />
      </div>
    </section>
  );
};
