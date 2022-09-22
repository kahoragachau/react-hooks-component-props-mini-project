import React from "react";

export default function Article({ id, title, date, preview }){
    return (
        <article key={id}>
        {/* render {<ArticleList />} */}
        <h3>{title}</h3>
        {date ? <small>{date}</small> : <small>January 1, 1970</small>}
        <p>{preview}</p>
        </article>
    )
}