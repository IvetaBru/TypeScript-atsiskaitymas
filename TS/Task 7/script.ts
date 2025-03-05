/* ------------------------------ TASK 7 -----------------------------------
Parašykite TS kodą, vartotojui atėjus į tinklapį kreipsis į NBA.json failą ir iš jo atvaizduos visas NBA komandas ir jų žaidėjus. 
Kiekviena komanda turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas komandos pavadinimas ir papildomose "mini kortelėse" išvardinti žaidėjai su vardais, pavardėmis ir nuoroda į daugiau informacijos apie juos.

Pastaba: Informacija apie komandas bei žaidėjus turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
type Players = {
    firstName: string,
    lastName: string,
    googleSearch: string
}

type Team = {
    name: string,
    players: Players[]
}
const ENDPOINT = 'NBA.json';

(():void => {
fetch(ENDPOINT)
.then(res => res.json())
.then((data: {teams: Team[]}) => {
    const output = document.querySelector('#output') as HTMLDivElement;

    data.teams.forEach((team) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const teamName = document.createElement('h3');
        teamName.textContent = team.name;

        const teamPlayers = document.createElement('div');
        team.players.forEach(player => {
            
            const playerCard = document.createElement('div');
            playerCard.classList.add('playerCard');

            const playerName = document.createElement('h4');
            playerName.textContent = `${player.firstName} ${player.lastName}`;

            const playerInfo = document.createElement('a');

            playerInfo.href = player.googleSearch;
            playerInfo.text = `More about ${player.firstName} ${player.lastName}`;
            playerInfo.target = "_blank";

            playerCard.append(playerName, playerInfo);
            teamPlayers.appendChild(playerCard);
        })

        card.append(teamName, teamPlayers);
        output?.appendChild(card);
        });
    })
})();