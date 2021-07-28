import './Header.css'
import Starlogo from './images/Starlogo.png';
import NZ from './images/NZ.png'
import Maori from './images/Maori.png'

export default function Header() {

    return (
        <div>
            <div className="header">
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
                    <img src={NZ} alt='NZ flag' style={{ margin: '0px 0 0 0px' }} />
                    <img src={Maori} alt='Maori flag' style={{ margin: '0px 0 0 10px' }}/>
                </div>
            </div>

        </div>


    )

}