import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlassCheers } from '@fortawesome/free-solid-svg-icons';
import './App.css';


function App() {
const [drinks, setDrinks] = useState([]);

useEffect(() => {
fetch('http://localhost:9292/drinks')
.then((response) => response.json())
.then((data) => setDrinks(data));
}, []);

return (
<div>
<h1>
<FontAwesomeIcon icon={faGlassCheers} /> Kinywaji Safi Drink Tracker
</h1>
<ul>
{drinks.map((drink) => (
<li key={drink.id}>{drink.name}</li>
))}
</ul>
</div>
);
}

export default App;