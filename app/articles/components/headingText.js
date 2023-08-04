import ResultsList from "./resultsList";
import { Suspense } from 'react'

export default async function headingText({ category }) {
    return (
        <>
            <h1>I want to read about {category ? category : 'anything.'}</h1>
            <Suspense fallback={<p>LOADING (temporary)</p>}>
                <ResultsList/>
            </Suspense>
        </>
    )
}