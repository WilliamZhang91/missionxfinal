import './Tab.css'
import React, { useState } from 'react';
import Header from './Header'
import Button from './Button';
import RightArrowIcon from './RightArrow';
import LeftArrowIcon from './LeftArrow';
import ProjectTrackerIcon from './icons/ProjectTrackerIcon';
import StudentProfileIcon from './icons/StudentProfileIcon';
import HelpRequestIcon from './icons/HelpRequestsIcon';
import ProjectSubmissionsIcon from './icons/ProjectSubmissionsIcon';
import ProjectLibraryIcon from './icons/ProjectLibraryIcon';
import AccountCircleIcon from './icons/AccountCircleIcon';
import SettingsIcon from './icons/SettingsIcon';
import StudentProfiles from './innercard/StudentProfiles';
import StudentTracker from './innercard/StudentTracker';
import Ellipse from './images/Ellipse.png'


export default function Tab() {

    const [state, setState] = useState(1); //change tab colurs when selected
    const [isOpen, setIsOpen] = useState(false); //open drawer
    const [isDisplayed, setIsDisplayed] = useState('block') //righticon is set to display block on open of drawer/on page first load
    const [notDisplayed, setNotDisplayed] = useState('none') //lefticon is set to display none on close of drawer
    const [tabDescription, setTabDescription] = useState('none')//tab description is set to display none on first page load
    const [bottomIcons, setBottomIcons] = useState('bottomIconGroup')


    const toggleTab = (number) => {
        setState(number)
    }

    const toggleDrawerOpen = () => {
        setIsOpen(true)
        setIsDisplayed('none'); //right icon is hidden on drawer open
        setNotDisplayed('block'); //left icon is displayed on drawer open
        setTabDescription('block'); //label icon is displayed on drawer open
    }

    const toggleDrawerClose = () => {
        setIsOpen(false)
        setNotDisplayed('none') //left icon is hidden
        setIsDisplayed('block')//right icon is displayed 
        setTabDescription('none')
    }


    return (

        <div className="wholePage">
            <Header />
            <div style={{ display: 'flex' }}>
            <div className={isOpen ? "tab-active tab" : "tab"} >
                <img className={'img'} src={Ellipse} alt="Ellipse.png" />
                <div style={{ padding: '4vh 0' }}>
                    <div onClick={() => toggleTab(1)} className={state === 1 ? "highlight tabIndividual" : "tabIndividual"}><ProjectTrackerIcon /><div style={{ display: tabDescription }}>PROJECT TRACKER</div></div>
                    <div onClick={() => toggleTab(2)} className={state === 2 ? "highlight tabIndividual" : "tabIndividual"}><StudentProfileIcon /><div style={{ display: tabDescription }}>STUDENT PROFILE</div></div>
                    <div onClick={() => toggleTab(3)} className={state === 3 ? "highlight tabIndividual" : "tabIndividual"}><HelpRequestIcon /><div style={{ display: tabDescription }}>HELP REQUEST</div></div>
                    <div onClick={() => toggleTab(4)} className={state === 4 ? "highlight tabIndividual" : "tabIndividual"}><ProjectSubmissionsIcon /><div style={{ display: tabDescription }}>PROJECT SUBMISSION</div></div>
                    <div onClick={() => toggleTab(5)} className={state === 5 ? "highlight tabIndividual" : "tabIndividual"}><ProjectLibraryIcon /><div style={{ display: tabDescription }}>PROJECT LIBRARY</div></div>
                </div>

                <div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative', top: '2vh', }}><span style={{ display: notDisplayed }} onClick={toggleDrawerClose}><LeftArrowIcon /></span></div>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', position: 'relative', top: '15vh', }}><span style={{ display: isDisplayed }} onClick={toggleDrawerOpen}><RightArrowIcon /></span></div>
                </div>

                <div className={bottomIcons}>

                </div>

            </div>

            <div className="card">
                <div id='content' className={state === 1 ? "active cardIndividual" : "cardIndividual"}>
                    <div className="button"><Button /></div>
                    <div className='innerCard'>
                    <StudentTracker />
                    </div>
                </div>
                <div id='content' className={state === 2 ? "active cardIndividual" : "cardIndividual"}>
                    <div className="button"><Button /></div>
                    <div className='innerCard'>
                    <StudentProfiles />
                    </div>
                </div>
                <div id='content' className={state === 3 ? "active cardIndividual" : "cardIndividual"}></div>
                <div id='content' className={state === 4 ? "active cardIndividual" : "cardIndividual"}></div>
                <div id='content' className={state === 5 ? "active cardIndividual" : "cardIndividual"}></div>
            </div>

        </div>
        </div>

    )

}