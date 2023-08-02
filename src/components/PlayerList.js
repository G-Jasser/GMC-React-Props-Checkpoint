import Player from "./Player"
import players from "../assets/players"

const PlayerList = () => {
    return(
        <div className="PlayerLister">
            {//Basically loops over the cards Array and renderes each item using the template 
            players.map((player) => (
                    <Player player={player}/>
            ))}
        </div>
    )
}

export default PlayerList