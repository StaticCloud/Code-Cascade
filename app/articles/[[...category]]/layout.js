import { Suspense } from 'react';
import Loading from '@/app/components/Loading'

export default function ArticlesLayoutCategory({ children }) {
    return (
        <Suspense fallback={<Loading/>}>
            { children }
        </Suspense>
    );
}