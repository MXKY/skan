import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as AvatarSVG } from "../../assets/avatar.svg";
import styles from "./Menu.module.scss";
import { connect } from "react-redux";
import mapStateToProps from "../../storage/mapStateToProps";
import mapDispatchToProps from "../../storage/mapDispatchToProps";

function Menu({ onBtnClick, isAuth, setAuth }) {
    return (
        <div className={styles.parent}>
            <div className={styles.nav}>
                <NavLink to="/" className={styles.link} onClick={onBtnClick}>Главная</NavLink>
                <NavLink to="/" className={styles.link} onClick={onBtnClick}>Тарифы</NavLink>
                <NavLink to="/" className={styles.link} onClick={onBtnClick}>FAQ</NavLink>
            </div>

            {(isAuth && 
                <div className={styles.avatar__wrapper}>
                    <AvatarSVG className={styles.avatar} />
                    <span className={styles.username}>Максим Евгеньевич</span>
                    <button className={styles.exit_button} onClick={() => setAuth(false)}>Выйти</button>
                </div>)
                ||
                <div className={styles.buttons_wrapper}>
                    <button className={styles.register_button} onClick={onBtnClick} disabled>Зарегистрироваться</button>
                    <Link to="/auth" className={styles.login_button} onClick={onBtnClick}>Войти</Link>
                </div>
            }
        </div>
    );
}

export default connect(mapStateToProps("Menu"), mapDispatchToProps("Menu"))(Menu);