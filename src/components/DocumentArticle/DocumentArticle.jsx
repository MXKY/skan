import React from "react";
import styles from "./DocumentArticle.module.scss";
import { getNoun } from "../../validation";
import HTMLReactParser from "html-react-parser";
import DOMPurify from "dompurify";

export default function DocumentArticle({ data }) {
    //Ohhhhhhhhhhhhhh parsing

    const markup = DOMPurify.sanitize(data.content.markup, { 
        USE_PROFILES: { html: true },
        ALLOWED_TAGS: []
    });

    console.log(markup);

    return (
        <article className={styles.document}>
            <div className={styles.document__wrapper}>
                <div className={styles.header}>
                    <span className={styles.date}>{new Date(data.issueDate).toLocaleDateString().replace("/", ".")}</span>
                    <span className={styles.sourceName}>{data.source.name}</span>
                </div>

                <h1>
                    {data.title.text}
                </h1>

                <div className={styles.category}>
                    <span>Технические новости</span>
                </div>

                <div className={styles.content} dangerouslySetInnerHTML={{__html: markup}}>
                    
                </div>

                <div className={styles.footer}>
                    <button className={styles.btn}>
                        <a href={data.url} target="_blank" rel="noreferrer">
                            <span>Читать в источнике</span>
                        </a>
                    </button>

                    <span className={styles.word_count}>
                        {data.attributes.wordCount} {getNoun(data.attributes.wordCount, "слово", "слова", "слов")}
                    </span>
                </div>
            </div>
        </article>
    );
}