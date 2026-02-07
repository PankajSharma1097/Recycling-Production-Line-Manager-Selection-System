const fs = require("fs");

// Read candidates
const candidates = JSON.parse(
    fs.readFileSync("candidates.json", "utf-8")
);


//                                                                     SCORING FUNCTIONS

// Crisis Management
function crisisScore(candidate) {

    let score = 50; // base score

    candidate.skills.forEach(skill => {

        const s = skill.toLowerCase();

        if (s.includes("leadership")) score += 15;
        if (s.includes("crisis")) score += 20;
        if (s.includes("lean")) score += 10;

    });

    score += candidate.experience * 2;

    return Math.min(score, 100);
}



// Sustainability
function sustainabilityScore(candidate) {

    let score = 45;

    candidate.skills.forEach(skill => {

        const s = skill.toLowerCase();

        if (s.includes("recycling")) score += 25;
        if (s.includes("safety")) score += 15;
        if (s.includes("lean")) score += 10;

    });

    score += candidate.experience * 2;

    return Math.min(score, 100);
}



// Team Motivation
function teamScore(candidate) {

    let score = 40;

    candidate.skills.forEach(skill => {

        const s = skill.toLowerCase();

        if (s.includes("team")) score += 20;
        if (s.includes("leadership")) score += 20;

    });

    score += candidate.experience * 2;

    return Math.min(score, 100);
}



// EVALUATE ALL CANDIDATES 

const evaluatedCandidates = candidates.map(candidate => {

    const crisis = crisisScore(candidate);
    const sustainability = sustainabilityScore(candidate);
    const team = teamScore(candidate);

    const average = Math.round((crisis + sustainability + team) / 3);

    return {
        ...candidate,
        evaluation: {
            crisisManagement: crisis,
            sustainability: sustainability,
            teamMotivation: team,
            averageScore: average
        }
    };
});





evaluatedCandidates.sort(
    (a, b) => b.evaluation.averageScore - a.evaluation.averageScore
);

evaluatedCandidates.forEach((candidate, index) => {
    candidate.rank = index + 1;
});



// Save evaluated file
fs.writeFileSync(
    "evaluated_candidates.json",
    JSON.stringify(evaluatedCandidates, null, 2)
);

console.log("Candidates evaluated and ranked successfully!");
