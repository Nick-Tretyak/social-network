import React from "react";
import style from "./MyPosts.module.css"
import Post from "./Post/Post";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../Redux/profile-reducer";

const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);

    }

    let postElemensts = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
    return (
        <div>
            <div className={style.des}> Ava+des</div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            </div>
            <div>
                <button onClick={addPost}> Add post</button>
            </div>
            <h3>My posts</h3>
            <div className={style.myPosts}>
                {postElemensts}
            </div>
        </div>
    )
}

export default MyPosts;