"use client";
import PopOver from "./PopOver";
export default function Modal({ modalRef, closeDialog, confirmAction }) {
  return (
    <PopOver>
      <div
        ref={modalRef}
        role="alertdialog"
        className="bg-text-white modal-card scale-0 text-text-grey p-4 font-jost flex flex-col gap-4 rounded-md shadow-lg"
      >
        <p className="font-[500] text-2xl">Remove A Player</p>
        <hr />
        <p className="text-[1rem] text-center">Once a player is removed its details will be lost foreever</p>
        <div className="flex justify-end gap-2">
          <button type="button" className="rounded-lg border border-light-green text-light-green w-[5rem] py-1" onClick={()=>closeDialog()}>
            Cancel
          </button>{" "}
          <button type="button"  className="rounded-lg border border-light-green bg-light-green text-white w-[5rem] py-1 hover:bg-dark-green" onClick={()=>confirmAction()}>Confirm</button>
        </div>
      </div>
    </PopOver>
  );
}
