import React, { useState, useEffect } from 'react';


const cohortName = '2211-FTB-ET-WEB-AM';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


const RenderAllPlayers = () => {

    const[playerList, setPlayerList] = useState([]);

    useEffect(() => {
       fetchAllPlayers()
    }, [],

    useEffect (() => {
        //fetchSinglePlayer(fetchAllPlayers())
    }), [],

    console.log(playerList[0], 'updated player list')
    )

    const fetchAllPlayers = async () => {
        try {
            const response = await fetch(`${APIURL}players`);
            const result = await response.json();
            if (result.error) {
                throw result.error;
            }
            return setPlayerList(result.data.players)
        } catch (err) {
            console.error('Uh oh, trouble fetching players!', err);
        }
    };

    
    
    if (!playerList || !playerList.length) {
        return <h3>No players to display!</h3>;
      } else {
        return playerList.map((playerList) => {
            console.log(playerList.name, 'is the name of the puppy')
            return(
                <div>
                    <div className="single-player-card">
                        <h1 key = "name">{playerList.name}</h1>
                        <h1 key="breed">{playerList.breed}</h1>
                        <h1 key="status">{playerList.status}</h1>
                        <h1 key="id">{playerList.id}</h1>
                        <img key ="image" id="image" src={playerList.imageUrl}></img>
                    </div>
                    <button type="submit">Delete Player</button>
                </div>
            )
        })
      }
    }

export default RenderAllPlayers
