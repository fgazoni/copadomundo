function creatGame(player1, hour, player2) {
    return `
        <li>
            <img src="./assets/icon-${player1}.svg" alt="${player1}">
            <strong>${hour}</strong>
            <img src="./assets/icon-${player2}.svg" alt="${player2}">
        </li>
    `


}

let delay = -0.4;
function createCard(date, day, games) {
    delay = delay + 0.4;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <ul>
                ${games}
            </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML = 
    createCard("20/11", "Domingo", 
        creatGame("qatar", "13:00", "ecuador")
        ) +
       
    createCard("21/11", "Segunda Feira", 
        creatGame("england", "10:00", "iran") +
        creatGame("senegal", "13:00", "netherlands") +
        creatGame("usa", "16:00", "wales")
        ) +

    createCard("22/11", "Terça Feira", 
        creatGame("argentina", "07:00", "saudi arabia") +
        creatGame("denmark", "10:00", "tunisia") +
        creatGame("mexico", "13:00", "poland") +
        creatGame("france", "16:00", "australia"))
