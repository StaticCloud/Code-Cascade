import ResultsList from "../components/resultsList";
import CategoryHeader from "../components/categoryHeader";
import { getCategories } from "@/sanity/queries"
import { Suspense } from "react";

export default async function Articles({ params }) {
    let category;

    if (params.category == null) {
        category = null;
    } else {
        category = params.category[0]
    }
    
    const categoryData = await getCategories(category)

    return (
        <>
            <CategoryHeader category={categoryData}/>
            <Suspense fallback={<p>LOADING (temporary)</p>}>
                <ResultsList category={category}/>
            </Suspense>
        </>
    );
}