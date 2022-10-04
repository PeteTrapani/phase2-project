import React from "react";
import recentGames from "./FetchAPI2";
import SteamUser from "./SteamUser";

//shows Steam User info after fetching

function SteamCard() {
    return (
        <div className="steamCard">SteamCard
            <SteamUser />
            <recentGames />
            
        </div>
)}

export default SteamCard
