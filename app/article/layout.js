import styles from './styles/article.module.css';
import { Suspense } from 'react';
import Loading from '@/app/components/Loading';

export default function ArticlesLayout({ children }) {
    return (
        <section className={styles.articleWrapper}>
            <Suspense fallback={<Loading/>}>
                { children }
            </Suspense>
        </section>
    )
}