import { collection, addDoc, getDocs, doc } from "firebase/firestore";
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

export async function addScheduleToDB(tournamentId, roundId, matchData){
  try {
    const tournamentRef = collection(db, "tournaments").doc(tournamentId)
const roundRef = tournamentRef.collection("rounds").doc(roundId)
const matchesCollectionRef = roundRef.collection("matches")
const docRef = await addDoc(matchesCollectionRef, matchData)
console.log(`match data added to firestore with id: ${docRef.id}`);
  } catch (error) {
    
  }


}