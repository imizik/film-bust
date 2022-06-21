import firebase from "../../firebase/clientApp";

const doesDocExist = (docID) => {
  return firebase.firestore().collection("scores").doc(docID).get().then((doc) => {
       return doc.exists
  })
}

export default async function handler(req, res) {
  const {user} = req.body
  try {
    let doesExist = await doesDocExist(user)
    if (!doesExist) {
      await firebase.firestore().collection("scores").doc(user).set({
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
    res.status(200).end();
  } catch (err) {
    res.status(400).end();
  }
}