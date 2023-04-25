import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import CheckToken from "../../components/CheckToken";
import { ReactComponent as Picture4SVG } from "../../assets/picture4.svg";
import styles from "./ResultsPage.module.scss";
import ReportSlider from "../../components/ReportSlider/ReportSlider";
import { connect } from "react-redux";
import mapStateToProps from "../../storage/mapStateToProps";
import mapDispatchToProps from "../../storage/mapDispatchToProps";
import { useNavigate } from "react-router-dom";
import PublicationService from "../../services/PublicationService";
import DocumentArticle from "../../components/DocumentArticle/DocumentArticle";

function ResultsPage({ histogramLoadedDate, publicationsList }) {
    const navigate = useNavigate();

    const [remainingPublications, setRemainingPublications] = useState(publicationsList.length);

    const [loadedDocs, setLoadedDocs] = useState([]);

    const onShowMoreBtnClick = () => {
        setRemainingPublications(remainingPublications - 10);

        loadDocuments(publicationsList.length - remainingPublications + 1);
    }

    async function loadDocuments(indexOf, count = 10) {
        indexOf--;
        count--;

        console.log(remainingPublications, indexOf, indexOf + count)

        await PublicationService.getDocuments(publicationsList.slice(indexOf, indexOf + count).map(x => x.encodedId))
            .then(response => {
                console.log(JSON.stringify(response.data));
                setLoadedDocs(loadedDocs.concat(response.data));
            })
            .catch(response => {
                setLoadedDocs(null);
                console.log(JSON.stringify(response.data));
            });
    }

    useEffect(() => {
        if (histogramLoadedDate === null)
            navigate("/");
    }, [histogramLoadedDate, navigate]);

    return (
        <>
            <CheckToken unauthRedirect="/auth" />

            <Header />

            <main className={styles.content}>
                <h1>
                    Ищем. Скоро <br />
                    будут результаты
                </h1>

                <h4>
                    Поиск может занять некоторое время, <br />
                    просим сохранять терпение.
                </h4>

                <Picture4SVG className={styles.picture} />

                <section className={styles.report}>
                    <h2>
                        Общая сводка
                    </h2>
                    
                    <div className={styles.count}>
                        <span>Найдено <span>{publicationsList ? publicationsList?.length : "..."}</span> вариантов</span>
                    </div>

                    <ReportSlider />
                </section>

                {loadedDocs &&
                    <section className={styles.documents}>
                        <h2>
                            Список документов
                        </h2>

                        <div className={styles.documents__wrapper}>
                            {loadedDocs.map(x => 
                                <DocumentArticle data={x.ok} key={x.ok.issueDate} />
                            )}
                        </div>

                        {remainingPublications > 0 &&
                            <button className={styles.show_more_button} onClick={onShowMoreBtnClick}>Показать больше</button>
                        }
                    </section>
                }
            </main>

            <Footer />
        </>
    );
}

export default connect(mapStateToProps("ResultsPage"), mapDispatchToProps("ResultsPage"))(ResultsPage);