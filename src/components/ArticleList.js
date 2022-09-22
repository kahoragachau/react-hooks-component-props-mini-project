import React from "react";
import Article from "./Article";

export default function ArticleList({ posts }){
    // render Article component inside  <main> tag
        return (
            <main>
                {posts.map((post) => {
                    return (
                        <Article key={post.id} title={post.title} date={post.date} preview={post.preview}/>
                    )
                })}
            </main>
        )
}