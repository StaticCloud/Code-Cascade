export default function BlockChild({ block }) {
    return (<span> 
        {block.children.map((child, i) => {
            switch (child.marks[0]) {
                case 'code':
                    return <span><code>{child.text}</code></span>
                default:
                    return child.text
            }
        })}</span>)
}