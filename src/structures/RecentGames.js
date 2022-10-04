import React from 'react';

//data.response.game for each data togther
//create seperate variable
//map over response.games and then store it

let recentGames;
// fetch for recently played
fetch('https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v1/?key=6D1BE30F07E738AE8C58DA352FDC2211&steamid=76561198027064313')
  .then((response) => response.json())
  .then((data) => {
    recentGames = data.response.games
    //this console log shows each game broken out
   console.log({...recentGames.map(result => { return <p>{result}</p>})})

    // console.log(data.response.games)
    console.log(recentGames)
});

    //post data to db.json localhost3000
    // singular fetch

export default recentGames