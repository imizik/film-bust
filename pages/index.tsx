import styles from '../styles/Home.module.css'
import firebase from "../firebase/clientApp";
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollection} from 'react-firebase-hooks/firestore';
import Homepage from '../components/home';
import axios from 'axios';
import { useEffect } from 'react';

export default function Home() {
  const [user, loading, error] = useAuthState(firebase.auth());

  console.log('loading: ', loading, '|', "curr user: ", user)

  // const [scores, scoresLoading, scoresError] = useCollection(
  //   firebase.firestore().collection('scores'),
  //   {}
  // );
  // if (!scoresLoading && scores) {
  //   scores.docs.map((doc) => console.log(doc.data()))
  // }


  useEffect(() => {
    if (user && !loading) {
      axios.post(`/api/setStats/`, {user: user.uid})
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  const signOut = () => {
    firebase.auth().signOut()
  }
  return (
    <div className={styles.container}>
      {!user && <Homepage user={false}/>}
      {user && <Homepage user={true} signOut={signOut}/>}
    </div>
  )
}
