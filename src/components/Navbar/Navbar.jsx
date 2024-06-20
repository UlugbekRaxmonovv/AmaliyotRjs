import React,{useState} from 'react';
import './Navbar.css'
import rasm from  '../../assets/img/Telegram.png'
import rasm1 from '../../assets/img/Kontact.png'
import rasm2 from '../../assets/img/logo.png'
import { Link } from 'react-router-dom';
import rasm4 from '../../assets/img/phone.png'
import rasm3 from '../../assets/img/search.png'
import { HiOutlineMenu } from "react-icons/hi";
import rasm5 from '../../assets/img/menu.png'
const Navbar = () => {
    const [menu, setMenu] = useState(false)
    const [fix, setFix] = useState(false);
    function setFixd() {
        if (window.scrollY >= 10) {
          setFix(true);
        } else {
          setFix(false);
        }
      }
      
      window.addEventListener('scroll', setFixd);

    return (
     <>
     <div className="nav_lint_top">
     <div className="nav_top containera">
            <div className="nav_top_link">
                <p>Инвестиционно-финансовая компания</p>
            </div>

            <div className="nav_top_right">
                <div className="nav_top_right_link">
                    <div className="icon">
                    <div className="icon_all">
                  <img src={rasm} alt="" />
                      </div>
                     <div className="icon_all">
                     <p>Город  Казань</p>
                       </div>
                    </div>
                   
                </div>
                <div className="nav_top_right_link">
                    <p>О компании</p>
                </div>
                <div className="nav_top_right_link">
                    <p>Отзывы</p>
                </div>
                <div className="nav_top_right_link">
                    <p>Отчетность</p>
                </div>
                <div className="nav_top_right_link">
                    <p>Наши партнеры</p>
                </div>
                <div className="nav_top_right_link">
                    <p>Сотрудничество</p>
                </div>
                <div className="nav_top_right_link">
                <div className="icon">
                    <div className="icon_all">
                    <p>Контакты</p>
                      </div>
                     <div className="icon_all">
                    <img src={rasm1} alt="" />
                       </div>
                    </div>
                   
                </div>
            </div>
            <div className="span">
          <p>RU</p>
            </div>
            </div>
     </div>
     
        <div className={fix ? 'header fixed' : 'header'}>
          
            <header>
                <div className="containera">
                    <nav className="nav">
                     <div className="logo">
                        <img src={rasm2} alt="" />
                     </div>
                     <div className="ul_link">
                        <li>
                            <Link to='/'>Инвестиции</Link>
                        </li>
                        <li>
                            <Link to='/'>Рассрочка</Link>
                        </li>
                        <li>
                            <Link to='/'>Калькулятор</Link>
                        </li>
                        <li>
                            <div className="phone_row">
                                <div className="phone_all_link">
                                    <img src={rasm4} alt="" />
                                </div>
                                <div className="phone_all_link">
                                <Link to='/'>8 800 2700 700</Link>
                                </div>
                            </div>   
                        </li>
                        <li>
                         <div className="search">
                            <div className="search_all">
                                <img src={rasm3} alt="" />
                            </div>
                            <div className="search_all">
                                <button>
                                Личный Кабинет
                                </button>
                                <button>
                                Онлайн-заявка
                                </button>
                                
                            </div>
                         </div>
                        </li>
                        
                     </div>
                    </nav>
                </div>
            </header>

          <div className={`hammasi ${menu ? "menu_alls" : ""}`}>
          <div className="menu">
                <div className="menu_alla">
              <img src={rasm5} alt=""  onClick={() =>setMenu(!menu)}/>
                </div>
                <div className="menu_all">
              <img src={rasm2} alt=""  />
                </div>
                <div className="menu_all">
                <div className="search_alll">
                                <button>
                                Личный Кабинет
                                </button>
                                </div>
                </div>
            </div>
            <div className={`link ${menu ? "menu_alls" : ""}`}>
                        <li>
                            <Link to='/'>Инвестиции</Link>
                        </li>
                        <li>
                            <Link to='/'>Рассрочка</Link>
                        </li>
                        <li>
                            <Link to='/'>Калькулятор</Link>
                        </li>
                        <li>
                       <Link> <img src={rasm3} alt="" /></Link>
                        </li>
                        
                     </div>
            
          </div>
        </div>
     </>
    );
}

export default Navbar;
