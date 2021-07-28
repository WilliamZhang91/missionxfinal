import './Projects.css'
import axios from 'axios'
import { useState, useEffect } from "react";
import Project01 from './images/Project01.png'
import Project02 from './images/Project02.png'
import Project03 from './images/Project03.png'
import Project04 from './images/Project04.png'
import Project05 from './images/Project05.png'
import Project06 from './images/Project06.png'
import Project07 from './images/Project07.png'
import Project08 from './images/Project08.png'
import Project09 from './images/Project09.png'
import Project10 from './images/Project10.png'
import Project11 from './images/Project11.png'
import Project12 from './images/Project12.png'
import Project13 from './images/Project13.png'
import Project14 from './images/Project14.png'
import Project15 from './images/Project15.png'

export default function Projects() {

    const [projects, setProjects] = useState([])
    const [subscriptionType, setSubscriptionType] = useState(false)



    useEffect(() => {
        axios.get('http://localhost:4000/project')
            .then(response => {
                console.log(response.data)
                setProjects(response.data)
            })
    }, [])

    return (

        <div className="projects">
            {projects.map((project, index) => (
                <div key={project.project_id}>
                    <img src={Project01} className="image" />
                    <h1 className="center">{project.project_name}</h1>
                    <div className="center1">
                        <span>{project.activity_type}</span><span className="span">|</span><span>{project.course}</span>
                    </div>
                </div>
            ))}
        </div>

    )
}