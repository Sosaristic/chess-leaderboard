"use client";
import { useState, useId } from "react";
import { addTeamToDB } from "@/services/firestoreFunction";
import PopOver from "./PopOver";

export default function PlayerDetails({ closePlayerDetailsDialog }) {
  const id = useId()
  const [playerName, setPlayerName] = useState("")
  const handlePlayerConfirmDialog = (e) => {
    e.preventDefault();
    const playerDetails = {playerName, games: 0, points: 0, id}
    addTeamToDB(playerDetails)
      .then(() => {
        console.log("team added successfully");
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        closePlayerDetailsDialog();
      });
  };
  return (
    <PopOver>
      <div
        role="editplayersmodal"
        className="relative w-full lg:w-[40%] bg-white text-text-grey px-4 py-3 rounded-md shadow-md"
      >
        <form onSubmit={handlePlayerConfirmDialog} className="flex flex-col w-full gap-1">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            autoComplete="off"
            required
            id="name"
            value={playerName}
            onChange={(e)=>setPlayerName(e.target.value)}
            className="outline-none border-2 h-[2.5rem] rounded-md pl-2 focus:border-light-green caret-light-green"
          />
          <div className="flex justify-end">
            <button
              type="button"
              className="h-[2.5rem] border-2 active:border-text-white w-[5rem] transition-colors duration-200 rounded-md hover:bg-dark-green bg-light-green text-text-white"
              onClick={() => closePlayerDetailsDialog(false)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-[2.5rem] border-2 active:border-text-white w-[5rem] transition-colors duration-200 rounded-md hover:bg-dark-green bg-light-green text-text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </PopOver>
  );
}
