import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  setDoc,
  query,
  where,
  increment,
  updateDoc,
  orderBy,
} from "firebase/firestore";
import { db } from "./firebase";

export async function addTeamToDB(teamData) {
  const docRef = collection(db, "teams");
  try {
    return await addDoc(docRef, teamData);
  } catch (error) {}
}

export async function getAllPlayers() {
  const teamsRef = collection(db, "teams")
  const q = query(teamsRef, orderBy("points", "desc"))
  try {
    const querySnapshot = await getDocs(q);
    let data = [];

    querySnapshot.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  } catch (error) {}
}

export async function addScheduleToDB(roundId, matchID, matchData) {
  try {
    const docRef = doc(db, "tournament", "rounds", roundId, matchID);
    const dataId = await setDoc(docRef, matchData);
  } catch (error) {
  }
}

export async function getScheduleFromDB(rounds) {
  try {
    const docRef = collection(db, "tournament", "rounds", rounds);
    const docSnap = await getDocs(docRef);
    const data = [];
    docSnap.forEach((doc) => {
      data.push(doc.data());
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function UpdateMatchData(home, away, result, round, matchID) {
  try {
    await Promise.allSettled([
      updateMatchResults(home, away, result, round, matchID),
     updatePlayerOne(home, result),
     updatePlayerTwo(away, result)
    ]);
  } catch (error) {
  }
}

async function updateMatchResults(home, away, result, round, matchID) {
  let resultDetails;
  if (result == 1) {
    resultDetails = { matchResult: `${home.playerName} won` };
  } else if (result == 2) {
    resultDetails = { matchResult: "Stalemate" };
  } else {
    resultDetails = { matchResult: `${away.playerName} won` };
  }

  const docRef = doc(db, "tournament", "rounds", round, matchID);
  await updateDoc(docRef, {
    matchResult: resultDetails,
  });
}




async function updatePlayerOne(home, result){
  const q = query(collection(db, "teams"), where("id", "==", home.id));
  const querySnapshot = await getDocs(q);

  let docID;
  querySnapshot.forEach((doc) => {
    docID = doc.ref.id;
  });

  const docRef = doc(db, "teams", docID);
  await updateDoc(docRef, {
    games: increment(1),
    w: result == 1? increment(1) : increment(0),
    l: result == 3? increment(1) : increment(0),
    d: result == 2? increment(1) : increment(0),
    points: result == 1? increment(1): result == 2? increment(0.5) : increment(0),
  });
}

async function updatePlayerTwo(away, result){
  const q = query(collection(db, "teams"), where("id", "==", away.id));
  const querySnapshot = await getDocs(q);

  let docID;
  querySnapshot.forEach((doc) => {
    docID = doc.ref.id;
  });

  const docRef = doc(db, "teams", docID);
  await updateDoc(docRef, {
    games: increment(1),
    w: result == 3? increment(1) : increment(0),
    l: result == 1? increment(1) : increment(0),
    d: result == 2? increment(1) : increment(0),
    points: result == 3? increment(1): result == 2? increment(0.5) : increment(0),
  });
}