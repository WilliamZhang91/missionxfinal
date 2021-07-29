import './ProjectHeader.css'
import Starlogo from './projectimages/Starlogo.png';
import NZ from './projectimages/NZ.png'
import Maori from './projectimages/Maori.png'

export default function ProjectHeader() {

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
                    <img src={NZ} alt='NZ flag' style={{ margin: '0px 0 0 0px' }} />
                    <img src={Maori} alt='Maori flag' style={{ margin: '0px 0 0 10px' }}/>
                </div>
            </div>

        </div>


    )

}