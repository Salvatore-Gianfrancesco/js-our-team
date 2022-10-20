const team = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angelo Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    },
]
// console.log(team);

for (let i = 0; i < team.length; i++) {
    for (const key in team[i]) {
        console.log(key + ": " + team[i][key]);
    }
    console.log("");
}

const rowEl = document.querySelector(".row");
// console.log(rowEl);

/* Creazione delle colonne nelle quali inserire le card */
for (let i = 0; i < team.length; i++) {
    const colEl = document.createElement("div");
    colEl.classList.add(".col");
    // console.log(colEl);

    rowEl.insertAdjacentElement("beforeend", colEl);
}

const colEl = document.getElementsByClassName(".col");
// console.log(colEl);
for (let i = 0; i < team.length; i++) {
    const cardMarkup = `
        <div class="card border-0 rounded-0">
            <img src="./assets/img/${team[i].image}" alt="">
            <h3 class="my-2">${team[i].name}</h3>
            <p class="fs-5">${team[i].role}</p>
        </div>
    `
    const currentCard = colEl[i];
    currentCard.innerHTML = cardMarkup;
}