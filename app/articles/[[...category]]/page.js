import ResultsList from "../components/resultsList";
import { Suspense } from "react";

export default async function Articles({ params }) {
    let category;

    if (params.category == null) {
        category = null;
    } else {
        category = params.category[0]
    }

    return (
        <>
            <h1>I want to read about <span>{category ? category : 'anything'}.</span></h1>
            <Suspense fallback={<p>LOADING (temporary)</p>}>
                <ResultsList category={category}/>
            </Suspense>
        </>
    );
}