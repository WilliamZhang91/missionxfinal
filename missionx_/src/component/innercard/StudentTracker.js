import './StudentTracker.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function StudentTracker() {

    const [projectTracker, setProjectTracker] = useState([])
    const [countNumber, setCountNumber] = useState([])
    const [projectStatus, setProjectStatus] = useState([])
    const [userOne, setUserOne] = useState([])
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

    useEffect(() => {
        axios.get('http://localhost:4000/user1')
            .then(response => {
                setUserOne(response.data)
            })
    })



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
                        
                            <div>
                                <h4 className='user'></h4>{item.user_name.toUpperCase()}<br />
                                <p className='projectsCompleted'>{item.started}/15 Projects Completed</p>
                            </div>
                            

                            {userOne.map(item => (
                            <div className='progressButton'>
                                <button className='progressButtonIndividual'></button>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                ))}
        </div>
    )
}