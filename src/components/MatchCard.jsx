export default function MatchCard({
  displayResult,
  user,
  setShowUpdateMatchModal,
  matchesData,
  round,
}) {
  if (matchesData[0] != undefined) {
    return (
      <div className="flex flex-col basis-full lg:basis-[45%] items-center shadow-lg font-jost flex-1">
        <p className="bg-dark-green w-full text-center capitalize">{round}</p>

        {matchesData[0]?.matches?.map((item, index) => {
          const { home, away, matchResult } = item;
          return (
            <div
              key={index}
              className=" shadow-match-card w-full text-center flex flex-col gap-1 my-2 px-2 py-4 rounded-md"
            >
              {user && (
                <button
                  type="button"
                  className="bg-light-green w-fit mx-auto px-2 py-1 rounded-md capitalize text-sm"
                  onClick={() => setShowUpdateMatchModal(true)}
                >
                  Update match
                </button>
              )}
              <div className="flex justify-around text-light-green font-[500]">
                <span className="flex-1">{home.playerName}</span> <span className="flex-1">vs</span>{" "}
                <span className="flex-1">{away.playerName}</span>
              </div>
              {displayResult && <p className="text-xs">{!matchResult? "Not played": "Anderson won"}</p>}
            </div>
          );
        })}
      </div>
    );
  }
}
