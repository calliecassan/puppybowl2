import React from 'react';

const fetchSinglePlayer = async (playerId) => {
    try {
        const singlePlayer = await fetch(`${APIURL}/players/${playerId}`)
        const result = await singlePlayer.json()
        return fetchSinglePlayer()
    } catch (err) {
        console.error('Cannot fetch single player!', err)
    }
};

export default RenderSinglePlayer