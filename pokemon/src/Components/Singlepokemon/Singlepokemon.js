import React,{useEffect,useState} from 'react'
import "./Singlepokemon.css"
export default function Singlepokemon(props) {
  return (
    <div>
      <img src={`${props.sprites.other.dream_world.front_default}`}/>
      {/* {console.log(image)} */}
       <p>Name : {props.name}</p>
       <p>Height : {props.height}</p>
       <p>Type : {props.types[0].type.name}</p>
    </div>
  )
}
