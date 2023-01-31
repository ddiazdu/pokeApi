import React from 'react'
import { useState } from 'react'
import Pokemon from './Pokemon'


const pokedex = ({

    randomId,
    getPokemon,
    pokemonNombre,
    pokemonImagen,
    pokemonHP,
    pokemonATK,
    pokemonDEF,
    pokemonXP,
    pokemonWeight,
    pokemonHeight,
    pokemonTipo,
    pokemonTipo2,


}) => {

    const handleClick = () => {

        getPokemon(randomId(1, 151))
    }



    return (
        <div>

            <div id="Icono" >
                <img src="./../../public/pokeapi_256.png" alt="" />
            </div>
            <p id="legend">* Para interactuar con la pokedex, pulsa el botón azul en la parte inferior izquierda</p>
            <div id="pokedex">
                <div id="left">
                    <div id="logo"></div>
                    <div id="bg_curve1_left"></div>
                    <div id="bg_curve2_left"></div>
                    <div id="curve1_left">
                        <div id="buttonGlass">
                            <div id="reflect"> </div>
                        </div>
                        <div id="miniButtonGlass1"></div>
                        <div id="miniButtonGlass2"></div>
                        <div id="miniButtonGlass3"></div>
                    </div>
                    <div id="curve2_left">
                        <div id="junction">
                            <div id="junction1"></div>
                            <div id="junction2"></div>
                        </div>
                    </div>
                    <div id="screen">
                        <div id="topPicture">
                            <div id="buttontopPicture1"></div>
                            <div id="buttontopPicture2"></div>
                        </div>
                        <div id="picture">
                            <img src={pokemonImagen} alt={pokemonNombre} height="170" />
                        </div>
                        <div id="buttonbottomPicture"></div>
                        <div id="speakers">
                            <div className="sp"></div>
                            <div className="sp"></div>
                            <div className="sp"></div>
                            <div className="sp"></div>
                        </div>
                    </div>

                    <div

                        id="bigbluebutton"
                        onClick={handleClick}
                    >
                    </div>
                    <div id="barbutton1"></div>
                    <div id="barbutton2"></div>
                    <div id="cross">
                        <div id="leftcross">
                            <div id="leftT"></div>
                        </div>
                        <div id="topcross">
                            <div id="upT"></div>
                        </div>
                        <div id="rightcross">
                            <div id="rightT"></div>
                        </div>
                        <div id="midcross">
                            <div id="midCircle"></div>
                        </div>
                        <div id="botcross">
                            <div id="downT"></div>
                        </div>
                    </div>
                </div>
                <div id="right">
                    <div id="stats">
                        <p>Name: <span>{pokemonNombre.toUpperCase()}</span></p>
                        <p>Health: <span>{pokemonHP}</span></p>
                        <p>Attack: <span>{pokemonATK}</span></p>
                        <p>Defense: <span>{pokemonDEF}</span></p>
                        <p>Experience: <span>{pokemonXP}</span></p>
                        <p>Weight: <span>{pokemonWeight !== '' ? `${pokemonWeight} KG` : ' '}</span></p>
                        <p>Height: <span>{pokemonHeight !== '' ? `${pokemonHeight} m.` : ' '}</span></p>
                        <p>Type: <span>{pokemonTipo} {pokemonTipo2}</span></p>

                    </div>
                    <div id="blueButtons1">
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                    </div>
                    <div id="blueButtons2">
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                        <div className="blueButton"></div>
                    </div>
                    <div id="miniButtonGlass4"></div>
                    <div id="miniButtonGlass5"></div>
                    <div id="barbutton3"></div>
                    <div id="barbutton4"></div>
                    <div id="yellowBox1"></div>
                    <div id="yellowBox2"></div>
                    <div id="bg_curve1_right"></div>
                    <div id="bg_curve2_right"></div>
                    <div id="curve1_right"></div>
                    <div id="curve2_right"></div>
                </div>
            </div>
        </div>
    )
}

export default pokedex 
