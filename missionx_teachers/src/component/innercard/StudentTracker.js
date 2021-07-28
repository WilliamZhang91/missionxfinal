import './StudentTracker.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function StudentTracker() {

    const [projectTracker, setProjectTracker] = useState([])
    const [countNumber, setCountNumber] = useState([])
    const [projectStatus, setProjectStatus] = useState([])
    console.log(countNumber)


    useEffect(() => {
        axios.get('http://localhost:4000/tracker1')
            .then(response => {
                setProjectTracker(response.data)
                console.log(response.data)

            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:4000/projectscompleted')
            .then(response => {
                setCountNumber(response.data)
                console.log(response.data)
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:4000/projectstatus')
            .then(response => {
                setProjectStatus(response.data)
                console.log(response.data)
            })
    }, [])



    return (
        <div className="overflow">

            <div className='flexContainerStyle'>
                <div className='beginnerCourse'>BEGINNER COURSE</div>
                <div className='exportAsDefault'>EXPORT AS SPREADSHEET</div>
            </div>

            {countNumber.map(item => (
                <div className='progressTrackerCard'>



                    <div className='layoutOfItems'>

                        <div className='status'>

                            <h4 className='user'></h4>{item.user_name.toUpperCase()}<br />
                            <p className='projectsCompleted'>{item.started}/15 Projects Completed</p>

                        </div>

                        <div className='progressButton'>
                            <button className='progressButtonIndividual'>1</button>
                            <button className='progressButtonIndividual'>2</button>
                            <button className='progressButtonIndividual'>3</button>
                            <button className='progressButtonIndividual'>4</button>
                            <button className='progressButtonIndividual'>5</button>
                            <button className='progressButtonIndividual'>6</button>
                            <button className='progressButtonIndividual'>7</button>
                            <button className='progressButtonIndividual'>8</button>
                            <button className='progressButtonIndividual'>9</button>
                            <button className='progressButtonIndividual'>10</button>
                            <button className='progressButtonIndividual'>11</button>
                            <button className='progressButtonIndividual'>12</button>
                            <button className='progressButtonIndividual'>13</button>
                            <button className='progressButtonIndividual'>14</button>
                            <button className='progressButtonIndividual'>15</button>
                        </div>
                    </div>


                </div>




            ))}


        </div>
    )
}