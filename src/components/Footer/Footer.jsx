import React,{useState} from 'react';
import './Footer.css'
import rasm from '../../assets/img/logo.png'
import rasm1 from '../../assets/img/search.png'
import { CiFacebook } from "react-icons/ci";
import { PiPaperPlaneTilt } from "react-icons/pi";
import { FiPhone } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import { VscChevronUp } from "react-icons/vsc";
import { VscChevronDown } from "react-icons/vsc";

const Footer = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    return (
        <div className="footir_hammasi">
  <footer>
        <div className="footir containera">
            <div className="footir_row">
            <div className="footir_alll">
     <img src={rasm} alt="" />
      </div>
      <div className="footir_all">
      <div className="input">
        <div className="input_all">
     <img src={rasm1} alt="" />
        </div>
        <div className="input_all">
        <input type="text" placeholder='Поиск по услугам' />
        </div>
      </div>
      </div>
            </div>

            <div className="footir_column">
<div className="footir_column_list">
    <ul> 
    <h1 className='h1'>8 800 2700 700</h1>
    <p>support@nur.finance</p>
        <li>
            <h2>Казань, ул. Мавлютова, дом 31</h2>
        <h6>Мы работаем с 08:00 до 20:00</h6>
        </li>
        <li>
            <div className="boglanish">
                <div className="boglanish_row">
                <CiFacebook />
                </div>
                <div className="boglanish_row">
                <FiPhone />
                </div>
                <div className="boglanish_row">
                <PiPaperPlaneTilt />
                </div>
                <div className="boglanish_row">
                <AiOutlineYoutube />
                </div>
                <div className="boglanish_row">
                <RxTwitterLogo />
                </div>
            </div>
        </li>
    </ul>
</div>

<div className="footir_column_list akk">
    <ul> 
    <h1>Инвестиции</h1>
        <li>
        <a href="" className="">Вклад Накопительный</a>
        </li>
      <li>
        <a href="" className="">Вклад Активный</a>
      </li>
      <li>
        <a href="" className="">Вклад Комфорт</a>
      </li>
      <li>
        <a href="" className="">Калькулятор</a>
      </li>
      <li>
        <a href="" className="">Отзывы по инвестициям</a>
      </li>
    </ul>
</div>

<div className="footir_column_list akk">
    <ul> 
    <h1>Рассрочка</h1>
        <li>
        <a href="" className="">АвтоРассрочка</a>
        </li>
      <li>
        <a href="" className="">Долевое финансирование</a>
      </li>
      <li>
        <a href="" className="">Долговое финансирование</a>
      </li>
      <li>
        <a href="" className="">Калькулятор</a>
      </li>
      <li>
        <a href="" className="">Отзывы по займам</a>
      </li>
    </ul>
</div>


<div className="footir_column_list akk">
    <ul> 
    <h1>Компания</h1>
        <li>
        <a href="" className="">О компании</a>
        </li>
      <li>
        <a href="" className="">Новости</a>
      </li>
      <li>
        <a href="" className="">Отчетность</a>
      </li>
      <li>
        <a href="" className="">Сотрудничество</a>
      </li>
      <li>
        <a href="" className="">Реквизиты</a>
      </li>
    </ul>
</div>

<div className="footir_column_list akk">
    <ul> 
    <h1>Информация</h1>
        <li>
        <a href="" className="">Халяль подробно</a>
        </li>
      <li>
        <a href="" className="">Наши партнеры</a>
      </li>
      <li>
        <a href="" className="">Частые вопросы</a>
      </li>
      <li>
        <a href="" className="">Личный кабинет</a>
      </li>
      <li>
        <a href="" className="">Контакты</a>
      </li>
    </ul>
</div>
 </div>
            
            <div className="footir_t">
<div className="footir_column_listts">
    <ul> 
    <div className={`h4 ${show ? "show" : ""}`}>
    <div className="h5">  <h1>Инвестиции</h1></div>
      <div className="h6"  onClick={() => setShow(!show)}>  
      {
       show ? 
      <VscChevronUp  />

      :
           <VscChevronDown /> 
      } 
       </div>
    </div>
       <div className={`kol ${show ? "show" : ""}`}>
        <li>
        <a href="" className="">Халяль подробно</a>
        </li>
      <li>
        <a href="" className="">Наши партнеры</a>
      </li>
      <li>
        <a href="" className="">Частые вопросы</a>
      </li>
      <li>
        <a href="" className="">Личный кабинет</a>
      </li>
      <li>
        <a href="" className="">Контакты</a>
      </li>
       </div>
    </ul>
</div>

<div className="footir_column_listts">
    <ul> 
   <div className={`h4 ${show1 ? "show1" : ""}`}>
    <div className="h5">  <h1>Инвестиции</h1></div>
      <div className="h6" onClick={() => setShow1(!show1)} > 
       {
      show1 ? 
      <VscChevronUp  />

      :
           <VscChevronDown /> 
      } 
    
</div>
    </div>
        <div className={`koll ${show1 ? "show1" : ""}`}>
        <li>
        <a href="" className="">Халяль подробно</a>
        </li>
      <li>
        <a href="" className="">Наши партнеры</a>
      </li>
      <li>
        <a href="" className="">Частые вопросы</a>
      </li>
      <li>
        <a href="" className="">Личный кабинет</a>
      </li>
      <li>
        <a href="" className="">Контакты</a>
      </li>
       </div>
    </ul>
</div>


<div className="footir_column_listts">
    <ul> 
    <div className={`h4 ${show2 ? "show2" : ""}`}>
    <div className="h5">  <h1>Инвестиции</h1></div>
      <div className="h6" onClick={() => setShow2(!show2)} >
      { 
      show2 ? 
      <VscChevronUp  />

      :
           <VscChevronDown /> 
      }
      </div>
    </div>
      <div className={`kols ${show2 ? "show2" : ""}`}>
        <li>
        <a href="" className="">Халяль подробно</a>
        </li>
      <li>
        <a href="" className="">Наши партнеры</a>
      </li>
      <li>
        <a href="" className="">Частые вопросы</a>
      </li>
      <li>
        <a href="" className="">Личный кабинет</a>
      </li>
      <li>
        <a href="" className="">Контакты</a>
      </li>
       </div>
    </ul>
</div>

<div className="footir_column_listts">
    <ul> 
     <div className={`h4 ${show3 ? "show3" : ""}`}>
    <div className="h5">  <h1>Инвестиции</h1></div>
      <div className="h6" onClick={() => setShow3(!show3)}>
           { 
      show3 ? 
      <VscChevronUp  />

      :
           <VscChevronDown /> 
      }
      </div>
    </div>
       <div className={`kolw ${show3 ? "show3" : ""}`}>
        <li>
        <a href="" className="">Халяль подробно</a>
        </li>
      <li>
        <a href="" className="">Наши партнеры</a>
      </li>
      <li>
        <a href="" className="">Частые вопросы</a>
      </li>
      <li>
        <a href="" className="">Личный кабинет</a>
      </li>
      <li>
        <a href="" className="">Контакты</a>
      </li>
       </div>
    </ul>
</div>
</div>

            <div className="p5">
            <h5>Заголовок о дом моментах</h5>
            <p>Давно выяснено, что при оценке дизайна и композиции читаемый текст мешает сосредоточиться. Lorem Ipsum используют потому, что тот обеспечивает более или менее стандартное заполнение шаблона, а также реальное распределение букв и пробелов в абзацах, которое не получается при простой дубликации "Здесь ваш текст.. Здесь ваш текст.. Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML используют Lorem Ipsum в качестве текста по умолчанию, так что поиск по ключевым словам "lorem ipsum" сразу показывает, как много веб-страниц всё ещё дожидаются своего настоящего рождения. </p>
            </div>

            <div className="p5_bootom">
            <div className="p5_bootom_m">
            <p>© 2021 АО «НурФинанс»</p>

            </div>
              <div className="p5_bootom_m">
            <p>Политика конфиденциальности</p>
            
            </div>
            </div>
     
        </div>
      </footer>
        </div>
    
    );
}

export default Footer;
