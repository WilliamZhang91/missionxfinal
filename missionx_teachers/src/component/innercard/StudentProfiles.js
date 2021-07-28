import axios from 'axios';
import { useState, useEffect } from 'react';
import './StudentProfiles.css'

export default function StudentProfiles() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4000/user')
            .then(response => {
                setUsers(response.data)
            })
    }, [])

    return (
        <div className={'flex-container'}>
            {users.map(user => (
                    <div className='flex-item'>
                        <img className='profilePic' src={user.profile_pic} />
                        <p className='userName'>{user.user_name}</p>
                    </div>     
            ))}
        </div>
    )
}