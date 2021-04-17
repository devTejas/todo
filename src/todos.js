import { useState } from "react";
import { auth, firestore } from "./firebase";
import {useCollectionData} from 'react-firebase-hooks/firestore';
import firebase from 'firebase';
import './App.css';
import './todos.css';

const Todos = () => {
  const [todo, setTodo] = useState("");
  const todosRef=firestore.collection(`users/${auth.currentUser.uid}/todos`)
  const [todos] = useCollectionData(todosRef,{idField:'id'});
  console.log(todo, todos);

  const signOut = () => auth.signOut();

  const onSubmitTodo = (event) => {
    event.preventDefault();

    todos.push(todo);
    setTodo("");
    todosRef.add({
      text:todo,
      complete:false,
      createdAt:firebase.firestore.FieldValue.serverTimestamp(),
    })
  };

  return (
    <div>
      <header>
        <button onClick={()=>signOut()}>Sign Out</button>
      </header>
      <form onSubmit={()=>onSubmitTodo}>
        <input
          required
          type="text"
          placeholder="What's next?"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <input type="submit" value="Add" />
      </form>
      {todos && todos.map((todo) => <Todo {...todo} />)}
    </div>
  );
};

const Todo = (id, complete, text) => {
  const todosRef=firestore.collection(`users/${auth.currentUser.uid}/todos`)
  const onCompleteTodo = (id, complete) => todosRef.doc(id).set({complete:!complete},{merge:true});
  const onDeleteTodo = (id) => todosRef.doc(id).delete();

  console.log(id,complete,text);

  return (
    <div key={id} className="todo">
      <span>{text}</span>
      <button tabIndex="0" onClick={() => onCompleteTodo(id, complete)}>
        {text}
      </button>
      <button onClick={()=>onDeleteTodo(id)}>x</button>
    </div>
  );
};

export default Todos;
