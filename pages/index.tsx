/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from '../styles/Home.module.css'
import firebase from "../firebase/clientApp";
import {useAuthState} from 'react-firebase-hooks/auth';
import Homepage from '../components/home';
import axios from 'axios';
import { useEffect } from 'react';

export default function Home() {
  const auth = firebase.auth()
  const [user, loading] = useAuthState((auth as any));

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
