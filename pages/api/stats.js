import firebase from "../../firebase/clientApp";
import { updateDoc, increment } from "firebase/firestore";
export default async function handler(req, res) {
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
