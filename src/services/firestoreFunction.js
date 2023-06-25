import { collection, addDoc, getDocs } from "firebase/firestore";
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