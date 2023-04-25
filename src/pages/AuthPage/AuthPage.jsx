import React, { useEffect } from "react";
import AuthWidget from "../../components/AuthWidget/AuthWidget";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ReactComponent as Picture } from "../../assets/key carriers.svg";
import styles from "./AuthPage.module.scss";
import { connect } from "react-redux";
import mapStateToProps from "../../storage/mapStateToProps";
import mapDispatchToProps from "../../storage/mapDispatchToProps";
import { useNavigate } from "react-router-dom";

function AuthPage({ isAuth }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) navigate("/");
    });

    return (
        <>
            <Header />
            <main className={styles.content}>
                <div className={styles.flex_container}>
                    <span className={styles.title}>
                        Для оформления подписки 
                        на тариф, необходимо авторизоваться.
                    </span>

                    <AuthWidget />
                </div>
                
                <Picture className={styles.picture} />
            </main>
            <Footer />
        </>
    );
}

export default connect(mapStateToProps("AuthPage"), mapDispatchToProps("AuthPage"))(AuthPage);