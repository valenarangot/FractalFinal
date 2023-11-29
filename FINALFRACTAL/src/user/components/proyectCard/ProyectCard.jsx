import React from "react";
import './ProyectCard.css'

export function ProyectCard({project, projectImage, onClick}){

    const background = {
        backgroundImage: `linear-gradient(180deg, rgba(16, 18, 30, 0.10) 0%, rgba(16, 18, 30, 0.75) 100%), url('${projectImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    const projectType = project.type.join(' - ')

    return(
        <div 
            className="proyect-card"
            onClick={onClick}
            style={background}
        >
            <h2>{project.title}</h2>
            <h3><i>{projectType}</i></h3>
            <p>{project.description}</p>
        </div>
    )
}