import './HeaderTab.css'
import Starlogo from './images/Starlogo.png'

export default function HeaderTab() {

    return (
        <div className='header'>
            <div>
                <img src={Starlogo} />
            </div>
        </div>
    )
}