import React from 'react';

//data.response.game for each data togther
//create seperate variable
//map over response.games and then store it
// below if fetch for player summaries
// 'http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=6D1BE30F07E738AE8C58DA352FDC2211&steamids=76561198027064313'
//76561198027064313 steam user ID
//76561198375251575 steam user ID
//6D1BE30F07E738AE8C58DA352FDC2211 api key
let recentGames;
// fetch for recently played
fetch('https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=6D1BE30F07E738AE8C58DA352FDC2211&steamid=76561198027064313')
  .then((response) => response.json())
  .then((data) => {
    recentGames = 
    // console.log(recentGames)

    // console.log(data.response.games)
    console.log(data.response.games)
});

    //post data to db.json localhost3000
    // singular fetch

export default recentGames