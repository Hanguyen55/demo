import React,{Component} from 'react';
import { FaBars ,FaSun ,FaChevronDown ,FaSignOutAlt ,FaMoon } from 'react-icons/fa';
import { Routes, Route, Link} from 'react-router-dom';
import styles from'./styles/layout.module.css';
import profile from '../assets/anh1.jpg';

class Layout extends Component {
    constructor(){
        super();
        this.state = {
            closeMenus: true,
        }
    }
    showSubMenus = (e) => {
        const { showMenu } = styles;
        e.target.parentElement.parentElement.classList.toggle(showMenu);
    }
    closeMenus = () => {
        const { closeMenus } = this.state;
        this.setState({closeMenus: !closeMenus});
    }
    render(){
        const { closeMenus } = this.state;
        const {
            mini_menu ,
            sidebar ,
            close ,
            logo_details ,
            logo ,
            logo_name ,
            nav_links ,
            link_name ,
            logo_li ,
            iocn_link ,
            sub_menu ,
            blank ,
            profile_details ,
            profile_content ,
            name_job ,
            profile_name ,
            job ,
            arrow ,
            home_section ,
            home_content ,
            logo_open ,
            text
        } = styles;
        return (
            <div className={mini_menu}>
                <div className={ closeMenus ? sidebar : sidebar + ' ' + close}>
                    <div className={ logo_details }>
                        <FaMoon className={ logo }/>
                        <span className={ logo_name }>HaNhi</span>
                    </div>
                    <ul className={ nav_links }>
                        <li>
                            <a href='#'>
                            <FaSun className={ logo_li }/>
                            <span className={ link_name }>home1</span>
                            </a>
                            <ul className={ sub_menu + ' ' + blank }>
                                <li><a className={ link_name } href='#'>home1</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className={ iocn_link }>
                                <a href='#'>
                                <FaSun className={ logo_li }/>
                                <span className={ link_name }>home2</span>
                                </a>
                                <FaChevronDown className={ logo_li + ' ' + arrow } onClick={this.showSubMenus.bind(this)}/>
                            </div>
                            <ul className={ sub_menu }>
                                <li><a className={ link_name } href='#'>home2</a></li>
                                <li><a href='#'>mini home1</a></li>
                                <li><a href='#'>mini home2</a></li>
                                <li><a href='#'>mini home3</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className={ iocn_link }>
                                <a href='#'>
                                <FaSun className={ logo_li }/>
                                <span className={ link_name }>home3</span>
                                </a>
                                <FaChevronDown className={ logo_li + ' ' + arrow } onClick={this.showSubMenus.bind(this)}/>
                            </div>
                            <ul className={ sub_menu }>
                                <li><a className={ link_name } href='#'>home3</a></li>
                                <li><a href='#'>mini home1</a></li>
                                <li><a href='#'>mini home2</a></li>
                                <li><a href='#'>mini home3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href='#'>
                            <FaSun className={ logo_li }/>
                            <span className={ link_name }>home4</span>
                            </a>
                            <ul className={ sub_menu + ' ' + blank }>
                                <li><a className={ link_name } href='#'>home4</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href='#'>
                            <FaSun className={ logo_li }/>
                            <span className={ link_name }>home5</span>
                            </a>
                            <ul className={ sub_menu + ' ' + blank }>
                                <li><a className={ link_name } href='#'>home5</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className={ iocn_link }>
                                <a href='#'>
                                <FaSun className={ logo_li }/>
                                <span className={ link_name }>home6</span>
                                </a>
                                <FaChevronDown className={ logo_li + ' ' + arrow } onClick={this.showSubMenus.bind(this)}/>
                            </div>
                            <ul className={ sub_menu }>
                                <li><a className={ link_name } href='#'>home6</a></li>
                                <li><a href='#'>mini home1</a></li>
                                <li><a href='#'>mini home2</a></li>
                                <li><a href='#'>mini home3</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className={ iocn_link }>
                                <a href='#'>
                                <FaSun className={ logo_li }/>
                                <span className={ link_name }>home6</span>
                                </a>
                                <FaChevronDown className={ logo_li + ' ' + arrow } onClick={this.showSubMenus.bind(this)}/>
                            </div>
                            <ul className={ sub_menu }>
                                <li><a className={ link_name } href='#'>home6</a></li>
                                <li><a href='#'>mini home1</a></li>
                                <li><a href='#'>mini home2</a></li>
                                <li><a href='#'>mini home3</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className={ iocn_link }>
                                <a href='#'>
                                <FaSun className={ logo_li }/>
                                <span className={ link_name }>home6</span>
                                </a>
                                <FaChevronDown className={ logo_li + ' ' + arrow } onClick={this.showSubMenus.bind(this)}/>
                            </div>
                            <ul className={ sub_menu }>
                                <li><a className={ link_name } href='#'>home6</a></li>
                                <li><a href='#'>mini home1</a></li>
                                <li><a href='#'>mini home2</a></li>
                                <li><a href='#'>mini home3</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href='#'>
                            <FaSun className={ logo_li }/>
                            <span className={ link_name }>home7</span>
                            </a>
                            <ul className={ sub_menu + ' ' + blank }>
                                <li><a className={ link_name } href='#'>home7</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href='#'>
                            <FaSun className={ logo_li }/>
                            <span className={ link_name }>home8</span>
                            </a>
                            <ul className={ sub_menu + ' ' + blank }>
                                <li><a className={ link_name } href='#'>home8</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href='#'>
                            <FaSun className={ logo_li }/>
                            <span className={ link_name }>home9</span>
                            </a>
                            <ul className={ sub_menu + ' ' + blank }>
                                <li><a className={ link_name } href='#'>home9</a></li>
                            </ul>
                        </li>
                        <li>
                            <div className={ profile_details }>
                                <div className={ profile_content }>
                                    <img src={profile} alt='profile'/>
                                </div>
                                
                                <div className={ name_job }>
                                    <div className={ profile_name }>Ha Nguyen</div>
                                    <div className={ job }>Desginer</div>
                                </div>
                                <FaSignOutAlt className={ logo_li }/>
                            </div>
                        </li>
                    </ul>
                </div>
                <section className={ home_section }>
                    <div className={ home_content }>
                        <FaBars className={ logo_open } onClick={this.closeMenus}/>
                        <span className={ text }>Open</span>
                    </div>
                </section>
            </div>
        );
    }
}

export default Layout;