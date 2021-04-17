// import "./styles.css";
import Todos from "./todos";
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth } from "./firebase";
import firebase from 'firebase';
import './App.css';

const signInWithGoogle = () => auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

export const SignIn = () => (
  <main id="sign_in">
    <button onClick={signInWithGoogle}>Sign In with Google</button>
  </main>
);

const App = () => {
  const [user] = useAuthState(auth)
  return (
    <div id="main_container">
    <p>TODO APP</p>
    {user ? <Todos /> : <SignIn />}
    </div>
  );
};

export default App;
