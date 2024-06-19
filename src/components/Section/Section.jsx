import React from 'react';
import './Section.css'
import rasm from '../../assets/img/section.png'
import rasm1 from '../../assets/img/sections3.png'
import rasm2 from '../../assets/img/sections4.png'
import rasm3 from '../../assets/img/sections2.png'

const Section = () => {
    return (
        <div>
          <div className="section containera">
            <div className="section_all">
               <div className="img_all">
                <div className="span_rw"></div>
               <img src={rasm} alt="" />
               </div>
               <div className="img_all">
                <p>Накапливайте, принося пользу обществу</p>
               </div>
            </div>
            <div className="section_all">
               <div className="img_all">
                <div className="span_rw" style={{marginTop:'-1px',marginLeft:'-5px'}}></div>
               <img src={rasm1} alt="" />
               </div>
               <div className="img_all">
                <p>Зарабатывайте честно
и справедливо</p>
               </div>
            </div>
            <div className="section_all">
               <div className="img_all">
                <div className="span_rw"></div>
               <img src={rasm2} alt="" />
               </div>
               <div className="img_all">
                <p>Вкладывайте в реальные проверенные сделки</p>
               </div>
            </div>
            <div className="section_all">
               <div className="img_all">
                <div className="span_rw"></div>
               <img src={rasm3} alt="" />
               </div>
               <div className="img_all">
                <p>Обеспечьте вложения
надежными активами</p>
               </div>
            </div>
          </div>
        </div>
    );
}

export default Section;
