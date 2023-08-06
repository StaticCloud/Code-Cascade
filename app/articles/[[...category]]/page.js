import ResultsList from "../components/resultsList";
import CategoryHeader from "../components/categoryHeader";
import { getCategories, getPostSearch } from "@/sanity/queries"

export default async function Articles({ params }) {
    let category;

    if (params.category == null) {
        category = null;
    } else {
        category = params.category[0]
    }

    const currentCategoryQuery = getCategories(category);
    const allCategoriesQuery = getCategories();
    const getPostSearchQuery = getPostSearch(category);

    const [currentCategory, allCategories, articles] = await Promise.all([currentCategoryQuery, allCategoriesQuery, getPostSearchQuery])

    return (
        <>
            <CategoryHeader allCategories= {allCategories} category={category ? currentCategory[0] : { name: 'Anything', categoryColor: '#cecece' }}/>
            <ResultsList articles={articles}/>
        </>
    );
}