import React from "react";
import style from "./Dialogs.module.css"
import { NavLink } from "react-router-dom";
import { sendMessageActionCreator, updateDialogMessageActionCreator } from "../../Redux/dialogs-reducer";

const Dialog = (props) => {
    let path = "/dialogs/" + props.id
    return (
        <div>
            <NavLink to={path}>{props.img}{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div>{props.message}</div>
    )
}


const Dialogs = (props) => {
    let newPostElement = React.createRef();

    let addMessage = () => {
        props.dispatch(sendMessageActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateDialogMessageActionCreator(text);
        props.dispatch(action);
    }

    let dialogsElements = props.state.dialogs.map(d => <Dialog name={d.name} id={d.id} img={d.img} />)
    let messagesElements = props.state.messages.map(m => <Message message={m.message} />)

    return (
        <div className={style.dialogs}>
            <div>
                <div className={style.item}>
                    {dialogsElements}
                </div>

            </div>
            <div className={style.messages}>
                <div>
                    {messagesElements}

                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                    </div>
                    <div>
                        <button onClick={addMessage}>
                            Send Message
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Dialogs;