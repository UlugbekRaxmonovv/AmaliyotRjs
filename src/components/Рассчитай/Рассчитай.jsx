import React from 'react';
import './Рассчитай.css'
import rasm from '../../assets/img/chek.png'
import rasm1  from '../../assets/img/cart.png'
import rasm2 from '../../assets/img/grup11.png'

const Рассчитай = () => {
    return (
        <div className="container">
<div className="hisoblash">
        <div className='containera'>
            <div className="hisoblash_all">
              <h1>Рассчитай свои накопления и доход</h1>

              <div className="hosoblash_alt">
                <div className="hisoblash_row">
                    <div className="price">
                        <div className="price_all">
                            <p>Сумма вклада</p>
                        </div>
                        <h5>1 000 000 ₽</h5>
                    </div>
                    <div className="foiz">
                        <div className="foiz_row">
                        </div>
                        <div className="radius">
                            <div className="spnal"></div>
                        </div>
                       
                    </div>
                    <div className="pricee">
                        <div className="price_all">
                            <p>Срок инвестирования</p>
                        </div>
                        <h5>24 месяца</h5>
                    </div>
                    <div className="foiz">
                        <div className="foiz_roww">
                        </div>
                        <div className="radiuss">
                            <div className="spnal"></div>
                        </div>
                       
                    </div>
                    <div className="pricee">
                        <div className="price_all">
                            <p>Порядок выплаты дохода</p>
                        </div>
                    </div>
                    <div className="chek">
                        <div className="chek_all">
                            <input type="checkbox" defaultChecked name="chek" id="chek1" />
                            <button style={{backgroundColor:'white'}}>Ежемесячно</button>
                        </div>
                        <div className="chek_all">
                          <img src={rasm} className='well' alt="" />
                            <button>В конце срока</button>
                        </div>

                    </div>
                    <div className="pricee">
                        <div className="price_all">
                            <p>Пополнение вклада</p>
                        </div>
                        <h5>30 000 ₽ <span> /в месяц</span></h5>
                    </div>
                    <div className="foiz">
                        <div className="foiz_rowws">
                        </div>
                        <div className="radiussw">
                            <div className="spnal"></div>
                        </div>
                       
                    </div>
                    
              
                </div>
                <div className="hisoblash_rows">
                    <div className="img_all_rows">
                    <div className="img_alls">
                     <img src={rasm1} alt="" />
                    </div>
                  <img src={rasm2} alt="" />
                    </div>
                    <div className="doira_alt">
                    <div className="doira"></div>
                    <div className="doira"></div>
                    <div className="doira"></div>
                    <div className="doira"></div>
                    <div className="doira"></div>
                    <div className="doira"></div>





                    </div>
                   
                </div>
<div className="hisoblash_row">
    <div className="hiosblash_all">
    <div className="hisoblash_alt_list">
        <h1>12,5%</h1>
        <p>Доходность</p>
        <h1 className='teg'>282 366 ₽</h1>
        <p className="p">Сумма доходности</p>
        <h1 className='teg'>1 282 366 ₽</h1>
        <p className="p">Итоговая сумма</p>
        <button className="btn2">Инвестировать</button>
    </div>
    </div>
</div>
              </div>
            </div>
           </div>
             
        </div>
        </div>
        
    );
}

export default Рассчитай;
