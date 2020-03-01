import {renderEntireTree} from '../render';

let state = {
  profilePage: {
    posts: [
      {id:1, message: "Hi, how are you?", likeCount: 12},
      {id:2, message: "It's my first post.", likeCount: 1}
    ]
  },
  dialogsPage : {
    messages: [
      {id:1, message: "Hi"},
      {id:2, message: "How is your it-camasutra?"},
      {id:3, message: "Yo"},
      {id:4, message: "Yo"},
      {id:5, message: "Yo"}
    ],
    dialogs: [
      {id:1, name: "Dimych"},
      {id:2, name: "Andrey"},
      {id:3, name: "Sveta"},
      {id:4, name: "Sasha"},
      {id:5, name: "Nikitos"}
    ]
  }
}

export let addPost = (postMessage) => {
  let newPost = {
    id: 3,
    message: postMessage,
    likeCount: 0
  };

  state.profilePage.posts.push(newPost);
  renderEntireTree(state);
}

export default state;