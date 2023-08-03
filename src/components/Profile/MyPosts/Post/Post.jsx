import React from "react";
import style from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={style.post}>
            <img src="https://w.forfun.com/fetch/eb/eb771831b64ac1203e223edbc0efb99c.jpeg"></img>
            {props.message}
            <div>
                Likes:{props.likesCount}
            </div>
        </div>
    )
}

export default Post;