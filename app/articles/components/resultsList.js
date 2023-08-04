import Result from './result'
import { getPostSearch } from '@/sanity/queries'

export default async function resultsList() {
    const results = await getPostSearch();

    return (
        <div>
            {results.map((result, i) => (
                <Result result={result} key={i}/>
            ))}
        </div>
    )
}