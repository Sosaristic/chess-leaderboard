export function generateRoundRobinTeams(teams) {
    var numTeams = teams.length;
    var matchesPerRound = numTeams / 2;
    var totalRounds = numTeams - 1;
    
    var fixtures = [];
    
    var teamIndices = [...Array(numTeams).keys()];
  
    for (var round = 0; round < totalRounds; round++) {
      var roundFixtures = [];
      
      for (var match = 0; match < matchesPerRound; match++) {
        var home = teamIndices[match];
        var away = teamIndices[numTeams - 1 - match];
        
        roundFixtures.push({
          home: teams[home],
          away: teams[away],
          matchResult: null,
          matchID: `match${match + 1}`
        });
      }
      
      fixtures.push(roundFixtures);
      
      teamIndices.splice(1, 0, teamIndices.pop());
    }
    
    return fixtures;
  }


  export function getAparticularMatch(id, data){
const match = data.find((match)=>match.matchID == id)
return match

  }