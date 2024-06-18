import React from 'react';
import './Main.css'
import { LuChevronLeft } from "react-icons/lu";
import rasm from '../../assets/img/main.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';


const Main = () => {
    return (
        <div  className='main_all_row'>
          <div className="main container">
            <div className="main_all ">
                <div className="span_left">
               <div className="span_link"></div>
               <div className="span_content"></div>
               <div className="span_content_link"></div>
                </div>
            
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide> <div className="wrapperr">
            <div className="card_all">
            <div className="p1">
                    <div className="p2">
                        <h6>главная</h6>
                    </div>
                    <div className="p2">
                    <LuChevronLeft />
                    </div>
                    <div className="p2">
                    <h5>инвестиции</h5>
                    </div>  
                </div>
                <h1>Максимальная доля прибыли по вкладам <span className="span_tig"> НурФинанс</span></h1>
                <p>Инвестор получает наибольший капитализированный доход</p>
                <div className="btn">
                <div className="main_btn">
                    <button>Инвестиционные продукты</button>
                </div>
                <div className="main_btn">
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>

                </div>
                
                </div>
              
                
            </div>
            <div className="card_all">
                <img src={rasm} alt="" />
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide> <div className="wrapperr">
            <div className="card_all">
                <div className="p1">
                    <div className="p2">
                        <h6>главная</h6>
                    </div>
                    <div className="p2">
                    <LuChevronLeft />
                    </div>
                    <div className="p2">
                    <h5>инвестиции</h5>
                    </div>  
                </div>
                <h1>Максимальная доля прибыли по вкладам <span className="span_tig"> НурФинанс</span></h1>
                <p>Инвестор получает наибольший капитализированный доход</p>
                <div className="btn">
                <div className="main_btn">
                    <button>Инвестиционные продукты</button>
                </div>
                <div className="main_btn">
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>

                </div>
                
                </div>
              
                
            </div>
            <div className="card_all">
                <img src={rasm} alt="" />
            </div>
          </div>
          </SwiperSlide>
       
      </Swiper>
      <Swiper
       pagination={{
        clickable: true,
       }}
        modules={[Pagination]} className="Swiperr">
          <SwiperSlide> <div className="wrapperr">
            <div className="card_all">
            <div className="p1">
                    <div className="p2">
                        <h6>главная</h6>
                    </div>
                    <div className="p2">
                    <LuChevronLeft />
                    </div>
                    <div className="p2">
                    <h5>инвестиции</h5>
                    </div>  
                </div>
                <h1>Максимальная доля прибыли по вкладам <span className="span_tig"> НурФинанс</span></h1>
                <p>Инвестор получает наибольший капитализированный доход</p>
                <div className="btn">
                <div className="main_btn">
                    <button>Инвестиционные продукты</button>
                </div>
                <div className="main_btn">
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>

                </div>
                
                </div>
              
                
            </div>
            <div className="card_all">
                <img src={rasm} alt="" />
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide> <div className="wrapperr">
            <div className="card_all">
            <div className="p1">
                    <div className="p2">
                        <h6>главная</h6>
                    </div>
                    <div className="p2">
                    <LuChevronLeft />
                    </div>
                    <div className="p2">
                    <h5>инвестиции</h5>
                    </div>  
                </div>
                <h1>Максимальная доля прибыли по вкладам <span className="span_tig"> НурФинанс</span></h1>
                <p>Инвестор получает наибольший капитализированный доход</p>
                <div className="btn">
                <div className="main_btn">
                    <button>Инвестиционные продукты</button>
                </div>
                <div className="main_btn">
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>

                </div>
                
                </div>
              
                
            </div>
            <div className="card_all">
                <img src={rasm} alt="" />
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide> <div className="wrapperr">
            <div className="card_all">
            <div className="p1">
                    <div className="p2">
                        <h6>главная</h6>
                    </div>
                    <div className="p2">
                    <LuChevronLeft />
                    </div>
                    <div className="p2">
                    <h5>инвестиции</h5>
                    </div>  
                </div>
                <h1>Максимальная доля прибыли по вкладам <span className="span_tig"> НурФинанс</span></h1>
                <p>Инвестор получает наибольший капитализированный доход</p>
                <div className="btn">
                <div className="main_btn">
                    <button>Инвестиционные продукты</button>
                </div>
                <div className="main_btn">
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>

                </div>
                
                </div>
              
                
            </div>
            <div className="card_all">
                <img src={rasm} alt="" />
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide> <div className="wrapperr">
            <div className="card_all">
            <div className="p1">
                    <div className="p2">
                        <h6>главная</h6>
                    </div>
                    <div className="p2">
                    <LuChevronLeft />
                    </div>
                    <div className="p2">
                    <h5>инвестиции</h5>
                    </div>  
                </div>
                <h1>Максимальная доля прибыли по вкладам <span className="span_tig"> НурФинанс</span></h1>
                <p>Инвестор получает наибольший капитализированный доход</p>
                <div className="btn">
                <div className="main_btn">
                    <button>Инвестиционные продукты</button>
                </div>
                <div className="main_btn">
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>

                </div>
                
                </div>
              
                
            </div>
            <div className="card_all">
                <img src={rasm} alt="" />
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide> <div className="wrapperr">
            <div className="card_all">
            <div className="p1">
                    <div className="p2">
                        <h6>главная</h6>
                    </div>
                    <div className="p2">
                    <LuChevronLeft />
                    </div>
                    <div className="p2">
                    <h5>инвестиции</h5>
                    </div>  
                </div>
                <h1>Максимальная доля прибыли по вкладам <span className="span_tig"> НурФинанс</span></h1>
                <p>Инвестор получает наибольший капитализированный доход</p>
                <div className="btn">
                <div className="main_btn">
                    <button>Инвестиционные продукты</button>
                </div>
                <div className="main_btn">
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>
                <div className="btn-on"></div>

                </div>
                
                </div>
              
                
            </div>
            <div className="card_all">
                <img src={rasm} alt="" />
            </div>
          </div>
          </SwiperSlide>
      </Swiper>

            <div className="main_all ">
                <div className="span_left">
               <div className="span_contenta"></div>
               <div className="span_content_linka"></div>
               <div className="span_linka"></div>
               <div className="span_itim"></div>
                </div>
            
            </div>
          </div>

        </div>
    );
}

export default Main;
