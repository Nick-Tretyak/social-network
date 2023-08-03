import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"
import sideBarReducer from "./sidebar-reducer"

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi', likesCount: 12 },
                { id: 2, message: 'Its my first post', likesCount: 43 },
                { id: 3, message: 'Yo', likesCount: 21 },
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Sergey', img: <img src='https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png'></img> },
                { id: 2, name: 'Nastya', img: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTugosWIOR7352sS3RHnrdr_3mImXWQv5bHtw&usqp=CAU'></img> },
                { id: 3, name: 'Ann', img: <img src='https://demotivation.ru/wp-content/uploads/2021/10/3-32.jpg'></img> },
                { id: 4, name: 'Valera', img: <img src='https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg'></img> },
                { id: 5, name: 'Andrey', img: <img src='https://www.comicbookraw.com/wp-content/uploads/2020/01/baki-barns-zimniy-soldat-1-1170x850.jpg'></img> },
                { id: 6, name: 'Nikita', img: <img src='https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg'></img> },
            ],
            messages: [
                { id: 1, message: "Hi" },
                { id: 2, message: "How are You?" },
                { id: 3, message: "Yo" },
            ],
            newPostText: ''
        },
        sideBar: {
            favorites: [
                { id: 1, name: 'Sergey', img: <img src='https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png'></img> },
                { id: 2, name: 'Nastya', img: <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTugosWIOR7352sS3RHnrdr_3mImXWQv5bHtw&usqp=CAU'></img> },
                { id: 3, name: 'Ann', img: <img src='https://demotivation.ru/wp-content/uploads/2021/10/3-32.jpg'></img> },
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        sideBarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;