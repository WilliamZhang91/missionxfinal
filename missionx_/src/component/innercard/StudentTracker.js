import './StudentTracker.css'
import { useState, useEffect } from 'react'
import axios from 'axios'

export default function StudentTracker() {

    const [projectTracker, setProjectTracker] = useState([])
    const [countNumber, setCountNumber] = useState([])
    const [projectStatus, setProjectStatus] = useState([])
    const [userOne, setUserOne] = useState([])
    const [userTwo, setUserTwo] = useState([])
    const [userThree, setUserThree] = useState([])
    const [userFour, setUserFour] = useState([])
    const [userFive, setUserFive] = useState([])
    const [userSix, setUserSix] = useState([])
    const [userSeven, setUserSeven] = useState([])
    const [userTen, setUserTen] = useState([])
    const [userEleven, setUserEleven] = useState([])
    const [userThirteen, setUserThirteen] = useState([])
    const [userFourteen, setUserFourteen] = useState([])

    console.log(countNumber)


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

    useEffect(() => { //user_id = 1 projects completed
        axios.get('http://localhost:4000/user1')
            .then(response => {
                setUserOne(response.data)
            })
    })

    useEffect(() => { //user_id = 2 projects completed
        axios.get('http://localhost:4000/user2')
            .then(response => {
                setUserTwo(response.data)
            })
    })

    useEffect(() => { //user_id = 3 projects completed
        axios.get('http://localhost:4000/user3')
            .then(response => {
                setUserThree(response.data)
            })
    })

    useEffect(() => { //user_id = 4 projects completed
        axios.get('http://localhost:4000/user4')
            .then(response => {
                setUserFour(response.data)
            })
    })

    useEffect(() => { //user_id = 5 projects completed
        axios.get('http://localhost:4000/user5')
            .then(response => {
                setUserFive(response.data)
            })
    })

    useEffect(() => { //user_id = 6 projects completed
        axios.get('http://localhost:4000/user6')
            .then(response => {
                setUserSix(response.data)
            })
    })

    useEffect(() => { //user_id = 7 projects completed
        axios.get('http://localhost:4000/user7')
            .then(response => {
                setUserSeven(response.data)
            })
    })

    useEffect(() => { //user_id = 10 projects completed
        axios.get('http://localhost:4000/user10')
            .then(response => {
                setUserTen(response.data)
            })
    })

    useEffect(() => { //user_id = 11 projects completed
        axios.get('http://localhost:4000/Eleven')
            .then(response => {
                setUserEleven(response.data)
            })
    })

    useEffect(() => { //user_id = 13 projects completed
        axios.get('http://localhost:4000/userthirteen')
            .then(response => {
                setUserThirteen(response.data)
            })
    })

    useEffect(() => { //user_id = 14 projects completed
        axios.get('http://localhost:4000/userfourteen')
            .then(response => {
                setUserFourteen(response.data)
            })
    })



    return (
        <div className="overflow">

            <div className='flexContainerStyle'>
                <div className='beginnerCourse'>BEGINNER COURSE</div>
                <div className='exportAsDefault'>EXPORT AS SPREADSHEET</div>
            </div>


            <div className='progressTrackerCard'>
                <div className='layoutOfItems'>
                    <div className='status'>

                        <div>
                            <h4 className='user'>{countNumber.length > 0 && countNumber[0].user_name.toUpperCase()}</h4><br />
                            {countNumber.length > 0 && <p className='projectsCompleted'>{countNumber[0].completed}/15 Projects Completed</p>}
                        </div>

                        {userOne.map(item => (
                            <div className='progressButton'>
                                <button className='progressButtonIndividual'>{item.project_id}</button>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className='progressTrackerCard'>
                <div className='layoutOfItems'>
                    <div className='status'>

                        <div>
                            <h4 className='user'>{countNumber.length > 0 && countNumber[1].user_name.toUpperCase()}</h4><br />
                            {countNumber.length > 0 && <p className='projectsCompleted'>{countNumber[1].completed}/15 Projects Completed</p>}
                        </div>


                        {userTwo.map(item => (
                            <div className='progressButton'>
                                <button className='progressButtonIndividual'>{item.project_id}</button>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className='progressTrackerCard'>
                <div className='layoutOfItems'>
                    <div className='status'>

                        <div>
                            <h4 className='user'>{countNumber.length > 0 && countNumber[2].user_name.toUpperCase()}</h4><br />
                            {countNumber.length > 0 && <p className='projectsCompleted'>{countNumber[2].completed}/15 Projects Completed</p>}
                        </div>


                        {userThree.map(item => (
                            <div className='progressButton'>
                                <button className='progressButtonIndividual'>{item.project_id}</button>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className='progressTrackerCard'>
                <div className='layoutOfItems'>
                    <div className='status'>

                        <div>
                            <h4 className='user'>{countNumber.length > 0 && countNumber[3].user_name.toUpperCase()}</h4><br />
                            {countNumber.length > 0 && <p className='projectsCompleted'>{countNumber[3].completed}/15 Projects Completed</p>}
                        </div>


                        {userFour.map(item => (
                            <div className='progressButton'>
                                <button className='progressButtonIndividual'>{item.project_id}</button>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className='progressTrackerCard'>
                <div className='layoutOfItems'>
                    <div className='status'>

                        <div>
                            <h4 className='user'>{countNumber.length > 0 && countNumber[4].user_name.toUpperCase()}</h4><br />
                            {countNumber.length > 0 && <p className='projectsCompleted'>{countNumber[4].completed}/15 Projects Completed</p>}
                        </div>


                        {userFive.map(item => (
                            <div className='progressButton'>
                                <button className='progressButtonIndividual'>{item.project_id}</button>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className='progressTrackerCard'>
                <div className='layoutOfItems'>
                    <div className='status'>

                        <div>
                            <h4 className='user'>{countNumber.length > 0 && countNumber[5].user_name.toUpperCase()}</h4><br />
                            {countNumber.length > 0 && <p className='projectsCompleted'>{countNumber[5].completed}/15 Projects Completed</p>}
                        </div>

                        {userSix.map(item => (
                            <div className='progressButton'>
                                <button className='progressButtonIndividual'>{item.project_id}</button>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className='progressTrackerCard'>
                <div className='layoutOfItems'>
                    <div className='status'>

                        <div>
                            <h4 className='user'>{countNumber.length > 0 && countNumber[6].user_name.toUpperCase()}</h4><br />
                            {countNumber.length > 0 && <p className='projectsCompleted'>{countNumber[6].completed}/15 Projects Completed</p>}
                        </div>

                        {userSeven.map(item => (
                            <div className='progressButton'>
                                <button className='progressButtonIndividual'>{item.project_id}</button>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className='progressTrackerCard'>
                <div className='layoutOfItems'>
                    <div className='status'>

                        <div>
                            <h4 className='user'>{countNumber.length > 0 && countNumber[7].user_name.toUpperCase()}</h4><br />
                            {countNumber.length > 0 && <p className='projectsCompleted'>{countNumber[7].completed}/15 Projects Completed</p>}
                        </div>

                        {userTen.map(item => (
                            <div className='progressButton'>
                                <button className='progressButtonIndividual'>{item.project_id}</button>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className='progressTrackerCard'>
                <div className='layoutOfItems'>
                    <div className='status'>

                        <div>
                            <h4 className='user'>{countNumber.length > 0 && countNumber[8].user_name.toUpperCase()}</h4><br />
                            {countNumber.length > 0 && <p className='projectsCompleted'>{countNumber[8].completed}/15 Projects Completed</p>}
                        </div>

                        {userEleven.map(item => (
                            <div className='progressButton'>
                                <button className='progressButtonIndividual'>{item.project_id}</button>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

            <div className='progressTrackerCard'>
                <div className='layoutOfItems'>
                    <div className='status'>

                        <div>
                            <h4 className='user'>{countNumber.length > 0 && countNumber[9].user_name.toUpperCase()}</h4><br />
                            {countNumber.length > 0 && <p className='projectsCompleted'>{countNumber[9].completed}/15 Projects Completed</p>}
                        </div>

                        {userThirteen.map(item => (
                            <div className='progressButton'>
                                <button className='progressButtonIndividual'>{item.project_id}</button>
                            </div>
                        ))}

                    </div>
                </div>
            </div>      

            <div className='progressTrackerCard'>
                <div className='layoutOfItems'>
                    <div className='status'>

                        <div>
                            <h4 className='user'>{countNumber.length > 0 && countNumber[10].user_name.toUpperCase()}</h4><br />
                            {countNumber.length > 0 && <p className='projectsCompleted'>{countNumber[10].completed}/15 Projects Completed</p>}
                        </div>

                        {userFourteen.map(item => (
                            <div className='progressButton'>
                                <button className='progressButtonIndividual'>{item.project_id}</button>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}