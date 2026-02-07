const { faker } = require('@faker-js/faker');
const fs = require('fs');

const candidates = [];

for (let i = 1; i <= 40; i++) {

    let candidate = {
        id: i,
        name: faker.person.fullName(),
        experience: faker.number.int({ min: 1, max: 10 }),
        skills: faker.helpers.arrayElements(
            ['Leadership', 'Recycling Ops', 'Safety', 'Lean Manufacturing', 'Team Building', 'Crisis Mgmt'],
            { min: 2, max: 4 }
        )
    };

    candidates.push(candidate);
}

fs.writeFileSync(
    'candidates.json',
    JSON.stringify(candidates, null, 2)
);

console.log("Candidates generated successfully!");
