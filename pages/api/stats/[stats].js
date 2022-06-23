import firebase from "../../../firebase/clientApp";
import { updateDoc, increment } from "firebase/firestore";
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const {id, count} = req.body
    console.log(id, count)
    try{
      var scoreRef = firebase.firestore().collection('scores').doc(id);
      await updateDoc(scoreRef, {
        [count]: increment(1)
      })
      res.status(200).end();
    } catch (e) {
      console.log(e)
      res.status(400).end();
    }
  }

  if (req.method === 'GET') {
    const {stats} = req.query
    console.log(stats)
    try{
      var scoreRef = firebase.firestore().collection('scores').doc(stats);
      await scoreRef.get().then((doc) => {
        res.status(200).json(doc.data());
      })
    } catch (e) {
      console.log(e)
      res.status(400).end();
    }
  }
}
