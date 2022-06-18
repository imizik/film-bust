import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import firebase from "../firebase/clientApp";
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollection} from 'react-firebase-hooks/firestore';

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

  return (
    <div className={styles.container}>
      <Head>
        <title>Film Bust</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      HELLO
    </div>
  )
}