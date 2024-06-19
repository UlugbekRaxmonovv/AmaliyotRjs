import React from 'react';
import './Investitsiya.css'
import rasm from '../../assets/img/Invit.png'
import rasm1 from '../../assets/img/invt1.png'
const Investitsiya = () => {
    return (
        <div className='containera investitsiya_ro_list'>
          
     <div className="investitsiya">
        <div className="investitsiya_row">
        <div className="investitsiya_row_img">
            <div className="investitsiya_row_img_row">
                <img src={rasm} alt="" />
            </div>
            <img src={rasm1} alt="" className='alt_img_list' />
            <div className="bnt">
                <button>Видео о работе компании</button>
            </div>
        </div>
        </div>
     </div>
     <div className="investitsiya">
     <div className="investitsiya_row">
            <div className="investitsiya_row_teg">
                <h1>Разумные инвестиции</h1>
                <p>Вкладывая свои деньги в ИФК «Нур Финанс»</p>
              
            </div>
            <div className="one">
                <div className="one_row">
                    <div className="alr">1</div>
                </div>
                <div className="one_row">
                  <p>Долю в имуществе и активах компании</p>
                </div>
               </div>
               <div className="onea">
                <div className="one_row">
                    <div className="alr">1</div>
                </div>
                <div className="one_row">
                  <p>Долю в прибыли компании</p>
                </div>
               </div>
               <p className="pr">
               От торговых операций, обеспеченных реальными активами.
Доля в прибыли инвестора закрепляется в договоре в соответствии с условиями, которые зависят от суммы и срока инвестиционного вклада. доле каждого
в общем капитале компании.
               </p>
        </div>
     </div>
   
        </div>
    );
}

export default Investitsiya;
