import React from 'react';
import './IshModeli.css'
import rasm from '../../assets/img/IshMo.png'
import rasm1 from '../../assets/img/ishMo1.png'
import rasm2 from '../../assets/img/isMo2.png'
import rasm4 from '../../assets/img/mod1.png'
import rasm3 from '../../assets/img/isMo3.png'
import rasm5 from '../../assets/img/left.png'

const IshModeli = () => {
    return (
        <div>
            <div className="modeli_all containera">
                <h1>Модель работы</h1>

        <div className="modeli_all_row">
      <div className="modeli_all_row_list">
        <div className="hammsi_model">
            <div className="hammasi_row_list">
            <p>Ваш инвестиционный</p>
            </div>
            <div className="hammasi_row_list">
            <img src={rasm} alt="" />
            </div>
        </div>
   
        <div className="model_img">
            <div className="model_img_alyt">
                <img src={rasm2} alt="" />
            </div>
            <div className="model_img_alt">
                <h1>Инвестор фонда</h1>
                <h5>Доход инвестора по вкладу</h5>
            </div>
            <div className="model_img_alyt">
               <div className="img_link">
               <img src={rasm4} alt="" />
               </div>
            </div>
        </div>
    
      </div>
      <div className="modeli_all_row_listt">
       <img src={rasm1} alt="" />
       <p className='olr'>Инвестиционно-финансовая компания  «НурФинанс»</p>
      </div>
      <div className="modeli_all_row_list">
        <div className="hammsi_model">
            <div className="hammasi_row_list">
            <img src={rasm} alt="" />
            </div>
            <div className="hammasi_row_list">
            
            <h6>Финансирование</h6>
            </div>
        </div>
        <div className="model_img">
            <div className="model_img_alt">
            <div className="img_link">
               <img src={rasm4} alt="" />
               </div>
            </div>
            <div className="model_img_alt">
                <h4>Инвестор фонда</h4>
                <h6>Доход инвестора по вкладу</h6>
            </div>
            <div className="model_img_altt">
            <img src={rasm3} alt="" />
              
            </div>
        </div>
    
      </div>
       </div>

    <div className="ok">
    <div className="hammsi_modelkl">
            <div className="hammasi_row_listkl">
            <img src={rasm} alt="" />
          
            </div>
            <div className="hammasi_row_listkl">
            <p>Ваш инвестиционный</p>
            </div>
        </div>
        <div className="hammsi_modelkl">
            <div className="hammasi_row_listkl">
            <img src={rasm} alt="" />
          
            </div>
            <div className="hammasi_row_listkl">
            <h5>Доход инвестора
по вкладу</h5>
            </div>
        </div>
    </div>
  
       <div className="pri_row">
       <div className="pris"></div>

       </div>
       <div className="bootom">
        <div className="boot0m_row">
          <div className="text">
            <div className="text_row">
            <p>Обеспечение реальными активами гарантирует полный возврат инвестиций.</p>
            </div>
            <div className="lift">
                <div className="right">
                       <img src={rasm5} alt="" />
                </div>
                <div className="right">
                      <p>Возможный отрицательный результат</p>
                </div>
                <div className="right">
                       <img src={rasm5} alt="" />
                </div>
            </div>
          </div>
        </div>
       </div>
            </div>
        </div>
    );
}

export default IshModeli;
