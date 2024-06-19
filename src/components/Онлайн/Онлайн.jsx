import React from 'react';
import './Онлайн.css'
import rasm from '../../assets/img/onlayn.png'

const Онлайн = () => {
    return (
        <div className='Онлайн'>
           <div className="onlayun_all">
             <div className="onlayn_alt">
                <div className="onlayn_list">
                    <h1>Онлайн-заявка вкладчика</h1>
          <div className="onlayn_list_row">
            <div className="onlayn_list_item">
                <h1>Контактные данные</h1>
                <div className="onlayn_x">
                <div className="onlayn_y">
                <div className="onlayn_p">
                     <h6>Фамилия, Имя и Отчество</h6>
                     <h4>Иванов Алексей Петрович</h4>
                </div>
                <div className="onlayn_p">
                     <p>Электронная почта</p>
                     <h5>Name@mail.com</h5>
                </div>
                <div className="onlayn_p">
                     <p>Гражданство</p>
                   <select name="" id="">
                    <option value="">Имею гражданство РФ</option>
                   </select>
                </div>
                </div>
                <div className="onlayn_y">
                <div className="onlayn_p">
                     <h4>Мобильный телефон</h4>
                     <p>+7</p>
                </div>
                <div className="onlayn_p">
                     <h4>Дата рождения</h4>
                     <p>26.01.1984</p>
                </div>
                <div className="onlayn_p">
                     <h4>Город проживания</h4>
                     <p>Казань</p>
                </div>
                </div>
                </div>

                <div className="onlayn_btn">
                    <div className="onlayn_btn_link">
                        <button>Оформить заявку</button>
                    </div>
                    <div className="onlayn_btn_linkw">
                     <p>Заполняя форму, я принимаю</p>
                     <h6>условия передачи информации</h6>
                    </div>
                </div>
               
                
            </div>
            <div className="onlayn_list_item">
                <h1>Параметры вклада</h1>
                <div className="onlayn_x">
                <div className="onlayn_y">
                <div className="onlayn_p">
                     <h6>Сумма вклада</h6>
                     <h4>1 000 000 ₽</h4>
                     <div className="foz">
                     </div>
                        <div className="foz1"></div>
                </div>
                <div className="onlayn_p">
                     <p>Срок инвестирования</p>
                     <h5>24 месяца</h5>
                     <div className="foz2">
                     </div>
                        <div className="foz3"></div>
                    
                </div>
                <div className="onlayn_p">
                     <p>Пополнение вклада</p>
                     <h5>10 000 ₽ /в месяц</h5>
                     <div className="foz4">
                     </div>
                        <div className="foz5"></div>
                </div>
                </div>
                </div>

              
               
                
            </div>
            <div className="onlayn_list_item">
                <div className="onlayn_img_x">
                    <img src={rasm} alt="" />
                </div>
            </div>
          </div>

          

                </div>

                
             </div>
           </div>
        </div>
    );
}

export default Онлайн;
