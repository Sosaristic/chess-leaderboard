import { collection, addDoc, getDocs, doc, getDoc,  } from "firebase/firestore";
import { db } from "./firebase";

export async function addTeamToDB(teamData) {
  const docRef = collection(db, "teams");
  try {
    return await addDoc(docRef, teamData);
  } catch (error) {}
}

export async function getAllPlayers(){
    try {
        const querySnapshot = await getDocs(collection(db, "teams"));
        let data = []
        querySnapshot.forEach((doc)=>{
            data.push(doc.data())
        })
        return data
    } catch (error) {
        
    }

}

export async function addScheduleToDB( roundId, matchData){
  try {
   const docRef = collection(db, "tournament", "rounds", roundId)
   const dataId = await addDoc(docRef, matchData)
   console.log(dataId.id);
  } catch (error) {
    console.log(error);
  }


}

export async function getScheduleFromDB(week){
  try {
    const docRef = collection(db, "tournament", "rounds", week)
const docSnap =  await getDocs(docRef)
const data = []
docSnap.forEach((doc)=>{
  data.push(doc.data())
})
return data
  } catch (error) {
    console.log(error);
  }
}