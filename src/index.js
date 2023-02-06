import React from 'react';
import { createRoot } from 'react-dom/client';
import RenderAllPlayers from './components/renderAllPlayers';
//import RenderSinglePlayer from './components/renderSinglePlayer';


const App = () => { 
    return ( 
    <RenderAllPlayers /> 
    )
 }

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
