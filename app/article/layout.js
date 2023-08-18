import styles from './styles/article.module.css';

export default function ArticlesLayout({ children }) {
    return (
        <section className={styles.articleWrapper}>
            { children }
        </section>
    )
}