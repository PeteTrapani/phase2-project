import React from "react";


let steamUser;
// fetch for steam user
fetch('http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=6D1BE30F07E738AE8C58DA352FDC2211&steamids=76561198027064313')
  .then((response) => response.json())
  .then((data) => {
    steamUser = data.response.players
    console.log(steamUser)
    
    return (
        <div className="steamUser">

        </div>
    )
})

export default steamUser