let teamAScore = 0;
let teamBScore = 0;

let teamAOvers = 0;
let teamBOvers = 0;

let teamARR = 0;
let teamBRR = 0;

function incr(val, whichScore) {
    teamAScore += val;
    if (whichScore == "score-var-a") {
        teamAScore += val;
        if (teamAOvers == 0) {
            teamAOvers += 0.1;
        } else if ((teamAOvers * 10) % 10 == 0) {
            teamAOvers += 0.1;
        } else if ((teamAOvers * 10) % 5 == 0) {
            teamAOvers = Math.round(teamAOvers);
        } else {
            teamAOvers += 0.1;
        }
        teamAOvers = +teamAOvers.toFixed(2);
        teamARR = +(teamAScore / teamAOvers).toFixed(3);
    } else {
        teamBScore += val;
        if (teamBOvers == 0) {
            teamBOvers += 0.1;
        } else if ((teamBOvers * 10) % 10 == 0) {
            teamBOvers += 0.1;
        } else if ((teamBOvers * 10) % 5 == 0) {
            teamBOvers = Math.round(teamBOvers);
        } else {
            teamBOvers += 0.1;
        }
        teamBOvers = +teamBOvers.toFixed(2);
        teamBRR = +(teamBScore / teamBOvers).toFixed(3);
    }

    // Score displaying
    if (whichScore == "score-var-a") {
        document.getElementById(whichScore).textContent = teamAScore;
    } else {
        document.getElementById(whichScore).textContent = teamBScore;
    }

    // Overs displaying
    document.getElementById("overs-a-val").textContent = teamAOvers;
    document.getElementById("overs-b-val").textContent = teamBOvers;

    // Run rate displaying
    document.getElementById("rr-a-val").textContent = teamARR;
    document.getElementById("rr-b-val").textContent = teamBRR;
}