import React, {useState} from "react"
import Card from "./card/Card.js"
import "./content.css"

export default function Content(){
    const [name,setName] = useState ('name');
    const [job,setJob] = useState ('job');
    const [about,setAbout] = useState ('about');
    const [img1, setImg1] = useState ('img1');

    return( <div className="content_card">
        <div className="c1"> <Card name={'Angie Made'} job={'Piloto'} about={'Angie, piloto experimentado y confiable, con más de 10 años de experiencia en aviación. Destaca por su destreza, habilidades de toma de decisiones y calma bajo presión. Excelente comunicación y trabajo en equipo. Comprometido con la seguridad y brindando una experiencia positiva a los pasajeros.Ha demostrado un enfoque constante'} img1= {'fotoangie.jpg'}/> </div>
        <div className="c2"> <Card name={'Kamila Albornoz'} job={'Piloto'} about={'Kamila, piloto altamente competente con amplia experiencia en vuelo. Habilidad excepcional para tomar decisiones rápidas y mantener la calma en situaciones desafiantes. Comunicación clara y habilidades de liderazgo destacadas. Enfocada en la seguridad y en brindar una experiencia cómoda a los pasajeros.'} img1= {'fotokami.jpg'}/> </div>
        <div className="c3"> <Card name={'Solana Alvarez'} job={'Piloto'} about={'Solana, piloto con sólida formación y experiencia en aviación. Destaca por su destreza técnica y meticulosidad en el cumplimiento de los procedimientos. Capacidad para trabajar en equipo de manera eficiente y coordinarse con la tripulación y el personal de tierra. Comprometido con la seguridad y en ofrecer un servicio de calidad.'} img1= {'fotosol.jpg'}/> </div>

    </div>)

}
