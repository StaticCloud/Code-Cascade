import Result from './result'

export default async function resultsList({ articles }) {
    return (
        <div>
            {articles.map((result, i) => (
                <Result result={result} key={i}/>
            ))}
        </div>
    )
}