import Result from './result'
import { getPostSearch } from '@/sanity/queries'

export default async function resultsList({ category }) {
    const results = await getPostSearch(category);

    return (
        <div>
            {results.map((result, i) => (
                <Result result={result} key={i}/>
            ))}
        </div>
    )
}