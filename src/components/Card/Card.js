import React from 'react';
import typeColors from '../../helpers/typeColors'
importScripts
import './style.css';

function Card({ pokemon }) {
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card__name">
                {pokemon.name}
            </div>
            <div className="Card__types">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="Card__type" style={{ backgroundColor: typeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="Card__info">
                <div className="Card__data Card__data--weight">
                    <p className="title">Weight</p>
                    <p>{pokemon.weight}</p>
                </div>
                <div className="Card__data Card__data--weight">
                    <p className="title">Height</p>
                    <p>{pokemon.height}</p>
                </div>
                <div className="Card__data Card__data--ability">
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                </div>
                <button onclick="myFunction()">More</button>
                <div id="myDIV">
                    <div className="Card__data Card__data--ability">
                    <p className="title">Ability</p>
                    <p>{pokemon.abilities[0].ability.name}</p>
                    </div>
                </div>
                <script>
                    function myFunction() {
                        var x = document.getElementById("myDIV");
                        if (x.style.display === "none") {
                        x.style.display = "block";
                        } else {
                        x.style.display = "none";
                        }
                    }
                </script>    
            </div>
        </div>
    );
}



export default Card;
