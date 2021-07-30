import './ProjectHeader.css'
import Starlogo from './projectimages/Starlogo.png';
import NZ from './projectimages/NZ.png'
import Maori from './projectimages/Maori.png'
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function ProjectHeader() {

    const [teacherProfile, setTeacherProfile] = useState('')

    useEffect(() => {
        axios.get('http://localhost:4000/teacherprofilepic')
            .then(response => {
                setTeacherProfile(response.data)
                console.log(response.data)
            })
    }, [])

    return (
        <div>
            <div className="headerProject">
                <div className="logo">
                    <img src={Starlogo} />
                </div>
                <div className="buttons">
                    <p>HOME</p>
                    <p>PROJECTS</p>
                    <p>TEACHERS</p>
                </div>
                <div className="avatar">
                    <p className="lang">LANG</p>
                    <img src={NZ} alt='NZ flag' className='flagNzProjects' />
                    <img src={Maori} alt='Maori flag' className='flagMaoriProjects' />
                    <div className='teacherDetails'>
                        {teacherProfile.length > 0 && <img src={teacherProfile[0].profile_pic} className="teacherProfilePic" />}
                        {teacherProfile.length > 0 && <p className='teacherName'>{teacherProfile[0].user_name}</p>}
                    </div>
                </div>

            </div>

        </div>


    )

}