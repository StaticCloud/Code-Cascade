import { getPostSearch } from "@/sanity/queries";
import ResultsList from "./resultsList";

export default async function headingText({ category }) {
    const res = await getPostSearch()

    return (
        <>
        <h1>I want to read about {category ? category : 'anything.'}</h1>
        <ResultsList results={res}/>
        </>
    )
}