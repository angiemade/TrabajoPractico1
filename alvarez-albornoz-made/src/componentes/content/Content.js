
import React, {useState} from "react"
import Card from "./card/Card.js"
import "./content.css"

export default function Content(){
    const [name,setName] = useState ('name');
    const [job,setJob] = useState ('job');
    const [about,setAbout] = useState ('about');

    return( <div className="content_card">
        <div className="c1"> <Card name={'Angie Made'} job={'Estudiante'} about={'x'}/> </div>
        <div className="c2"> <Card name={'Kamila Albornoz'} job={'Estudiante'} about={'x'}/> </div>
        <div className="c3"> <Card name={'Solana Alvarez'} job={'Estudiante'} about={'x'}/> </div>

    </div>)

}
