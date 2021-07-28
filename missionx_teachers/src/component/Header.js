import './Header.css'
import Starlogo from './images/Starlogo.png'

export default function Header() {

    return (
        <div className={'header'}>
            <div>
                <img src={Starlogo} />
            </div>
        </div>
    )
}