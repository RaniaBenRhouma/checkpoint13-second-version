import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
  <h1> Checkpoint 13  React JS </h1>

<div className="container">
<h3> Example </h3>
  <img src="https://www.docplanner.com/images/curitiba.png" alt="Curitibia"/>
  <h4>Curitiba </h4>
  <p>Curitiba est une grande ville du Brésil et la capitale de l'État du Paraná.
   En 2017, la ville a 1 908 359 habitants 
    et sa région métropolitaine compte 3 400 100 habitants.
D'après le magazine Forbes en 20092, Curitiba est la troisième ville la plus sage du monde.
 Ce classement considère que la ville intelligente est celle qui 
 se soucie, conjointement, de l'écologie, du développement durable, de la qualité de vie, de mettre à
  disposition des infrastructures performantes et d'avoir une économie dynamique. La cité est un exemple 
  de planification du développement urbain, avec notamment l'invention du métro de surface. Elle est appelée 
  Cidade Modelo da América
 Latina (« Cité-modèle de l'Amérique latine »). Cette réussite est néanmoins plus nuancée en 2014</p>
</div>

<form>
  <h3>Si vous voulez voyager, enter vos coordonnés</h3>
<label>Name</label>
<input type="text" placeholder="Your Name Please"></input>
<label>Last Name</label>
<input type="text" placeholder="Your Last Name Please"></input>
<label>Email</label>
<input type="text" placeholder="Your Email Please"></input>

<div className="buttons">
<button type="submit">Submit</button>
<button type="reset">Reset</button>
</div>

</form>


    </div>
  );
}

export default App;
