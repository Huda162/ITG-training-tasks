
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
        if (i % 3 == 0 && i % 5 != 0) {
            console.log('Infinite');
        }
        else if (i % 5 == 0 && i % 3 != 0) {
            console.log('Tiers');
        }
        else {
            console.log('InfiniteTiers');
        }
    }
    else {
        console.log(i);
    }
}

var companies = {
    "hardware": ["company1", "globalTech", "company2"],
    "software": ["Asal", "InfiniteTiers", "Exhausted"],
    "networking": ["company3", "company4", "company5"]
};

var bestCompany1 = companies.software[1];

var bestCompany2 = "";

for(let i = 0; i<companies.software.length; i++){
    if(companies.software[i] == "InfiniteTiers")
    bestCompany2 = companies.software[i];
}

console.log(bestCompany1, " and ", bestCompany2);