import { Suspense } from 'react';
import Loading from '@/app/components/loading'

export default function ArticlesLayoutCategory({ children }) {
    return (
        <Suspense fallback={<Loading/>}>
            { children }
        </Suspense>
    );
}