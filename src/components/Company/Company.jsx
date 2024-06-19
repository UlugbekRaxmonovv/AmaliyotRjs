import React from 'react';
import './Company.css'
import rasm from '../../assets/img/com.png'
import rasm1 from '../../assets/img/com1ws.png'
import rasm2 from '../../assets/img/com2qasa.png'
const Company = () => {
    return (
        <div className='containera  '>
            <div className="company">
                <div className="company_Alt">
                   <div className="images">
                <div className="images_row">
                  <img src={rasm} alt="" />
                 </div>
                   </div>
                    <div className="company_Alt_row">
                         <div className="prg">
                            <p>Инвестиции</p>
                            <h1>Вклад Накопительный</h1>
                            <div className="price_listt">
                                <div className="price_list_row">
                                    <h1>17,5%</h1>
                                    <p>Доходность, до</p>
                                </div>
                                <div className="price_list_row">
                                   <div className="pri">
                                   <h1>90 дней</h1>
                                    <p>Срок вклада, от</p>
                                   </div>
                                </div>
 
                            </div>
                            <h6>Доход выплачивается по окончании срока договора, возможно досрочное расторжение</h6>
                            <div className="all">
                                <div className="all_row">
                                    <button>Инвестировать</button>
                                </div>
                                <div className="all_roww">
                                    <button>Подробнее</button>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
                <div className="company_Alt">
                   <div className="images">
                <div className="images_row">
                  <img src={rasm1} alt="" />
                 </div>
                   </div>
                    <div className="company_Alt_row">
                         <div className="prg">
                            <p>Инвестиции</p>
                            <h1>Вклад Активный</h1>
                            <div className="price_listt">
                                <div className="price_list_row">
                                    <h1>16,5%</h1>
                                    <p>Доходность, до</p>
                                </div>
                                <div className="price_list_row">
                                   <div className="pri">
                                   <h1>90 дней</h1>
                                    <p>Срок вклада, от</p>
                                   </div>
                                </div>
 
                            </div>
                            <h6>Доход выплачивается по окончании срока договора, возможно досрочное расторжение</h6>
                            <div className="all">
                                <div className="all_row">
                                    <button>Инвестировать</button>
                                </div>
                                <div className="all_roww">
                                    <button>Подробнее</button>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
                <div className="company_Alt">
                   <div className="images">
                <div className="images_row">
                  <img src={rasm2} alt=""  className='rasm2'/>
                 </div>
                   </div>
                    <div className="company_Alt_row">
                         <div className="prg">
                            <p>Инвестиции</p>
                            <h1>Вклад Комфорт</h1>
                            <div className="price_listt">
                                <div className="price_list_row">
                                    <h1>17,5%</h1>
                                    <p>Доходность, до</p>
                                </div>
                                <div className="price_list_row">
                                   <div className="pri">
                                   <h1>90 дней</h1>
                                    <p>Срок вклада, от</p>
                                   </div>
                                </div>
 
                            </div>
                            <h6>Доход выплачивается по окончании срока договора, возможно досрочное расторжение</h6>
                            <div className="all">
                                <div className="all_row">
                                    <button>Инвестировать</button>
                                </div>
                                <div className="all_roww">
                                    <button>Подробнее</button>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Company;
