let teamAScore = 0;
let teamBScore = 0;

let teamAOvers = 0;
let teamBOvers = 0;

let teamARR = 0;
let teamBRR = 0;

function incr(val, whichScore) {
    teamAScore += val;
    if (whichScore == "score-var-a") {
        if ((teamAOvers * 10) % 5 == 0) {
            teamAOvers = Math.round(teamAOvers);
        }
        teamAOvers += 0.1;
        teamAOvers.toFixed(1);
    }
    document.getElementById(whichScore).textContent = teamAScore;
    document.getElementById("overs-a-val").textContent = teamAOvers;
}