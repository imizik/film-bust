import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import firebase from "../firebase/clientApp";
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollection} from 'react-firebase-hooks/firestore';
import Homepage from '../components/home';

export default function Home() {
  const [user, loading, error] = useAuthState(firebase.auth());
  console.log('loading: ', loading, '|', "curr user: ", user)

  const [scores, scoresLoading, scoresError] = useCollection(
    firebase.firestore().collection('scores'),
    {}
  );
  if (!scoresLoading && scores) {
    scores.docs.map((doc) => console.log(doc.data()))
  }
  if (user && !firebase.firestore().collection("scores").doc(user.uid)) {
    firebase.firestore().collection("scores").doc(user.uid).set({
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0,
      7: 0,
      8: 0,
    });
  }

  const signOut = () => {
    firebase.auth().signOut()
  }

  return (
    <div className={styles.container}>
      {!user && <Homepage user={false} />}
      {user && <Homepage user={true} signOut={signOut}/>}
    </div>
  )
}
