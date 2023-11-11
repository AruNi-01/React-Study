import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
    // const {id, title, content} = useParams();
    // 使用的不多
    // const {params:{id,title,content}}= useMatch("/home/message/detail/:id/:title/:content");

    // const [searchParams, setSearchParams] = useSearchParams();
    // const id = searchParams.get('id');
    // const title = searchParams.get('title');
    // const content = searchParams.get('content');
    // 使用 location
    // const { search } = useLocation();
    // const { id, title, content } = qs.parse(search.slice(1));

    const { state: { id, title, content } } = useLocation();

    return (
        <ul>
            <li>id: {id}</li>
            <li>title: {title}</li>
            <li>content: {content}</li>
            {/* <button onClick={() => setSearchParams({ id: '009', title: 'message009', content: 'message009 content' })}>更新 search params</button> */}
        </ul>
    )
}
