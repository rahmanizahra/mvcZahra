import React from 'react';
// import Red from "./Red";
// import Green from "./Green";
// import Blue from "./Blue";
import {  Link } from "react-router-dom";
export default function MainPage(){

function handleFlowers() {
    console.log("flowers")
}
function handleTrees(){
    console.log("flowers")
}
function handleCars(){
    console.log("flowers")
}
    return(
        <>
        <h1>Name: Zahra </h1>
<h1>Id: 2210291</h1>
    
  
<Link to="/flowers">
<button onClick={handleFlowers}>
Flowers
</button>
</Link>
<Link to="/trees">
<button onClick={handleTrees}>
Trees
</button>
</Link>
<Link to="/cars">
<button onClick={handleCars}>
Cars
</button>
</Link>


       
       

        </>
    )
}