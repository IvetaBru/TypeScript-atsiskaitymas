var ENDPOINT = 'NBA.json';
(function () {
    fetch(ENDPOINT)
        .then(function (res) { return res.json(); })
        .then(function (data) {
        var output = document.querySelector('#output');
        data.teams.forEach(function (team) {
            var card = document.createElement('div');
            card.classList.add('card');
            var teamName = document.createElement('h3');
            teamName.textContent = team.name;
            var teamPlayers = document.createElement('div');
            team.players.forEach(function (player) {
                var playerCard = document.createElement('div');
                playerCard.classList.add('playerCard');
                var playerName = document.createElement('h4');
                playerName.textContent = "".concat(player.firstName, " ").concat(player.lastName);
                var playerInfo = document.createElement('a');
                playerInfo.href = player.googleSearch;
                playerInfo.text = "More about ".concat(player.firstName, " ").concat(player.lastName);
                playerInfo.target = "_blank";
                playerCard.append(playerName, playerInfo);
                teamPlayers.appendChild(playerCard);
            });
            card.append(teamName, teamPlayers);
            output === null || output === void 0 ? void 0 : output.appendChild(card);
        });
    });
})();
