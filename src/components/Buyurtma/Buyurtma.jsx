import React from 'react';
import './Buyurtma.css'
import rasm1 from '../../assets/img/buyut.png'
import rasm from '../../assets/img/buyur.png'

const Buyurtma = () => {
    return (
        <div>
            <div className="Buyurtma">
                <div className="Buyurtma_alt">
                   <div className="Buyurtma_alt_row containera">
                    <div className="Buyurtma_alt_list  ">
                        <h1>У вас остались вопросы? <br />
<span>Закажите консультацию специалиста</span></h1>
<p>Мы подробно ответим на все ваши вопросы и подберем наиболее удобный вариант вклада</p>
<div className="buyurtma_btn">
    <div className="buyurtma_list">
        <button>Заказать консультацию</button>
    </div>
    <div className="buyurtma_lists">
        <button>Онлайн чат</button>
    </div>
</div>
                    </div>
                    <div className="Buyurtma_alt_list ">
                        <div className="Buyurtma_alt_list_img">
                            <div className="Buyurtma_alt_list_img_all">
                                <img src={rasm} alt="" />
                            </div>
                            <img src={rasm1} alt="" />
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Buyurtma;
