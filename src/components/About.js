import React from "react";

export default function About(props){
    return (
        <>
        {/* {renders Aside, img alt, img src, p} */}
        <aside>
            { props.image ? <img src={props.image} alt="blog logo" /> : <img src="https://via.placeholder.com/215" alt="blog logo" />}
            <p>{props.about}</p>
        </aside>

        </>
    )
}