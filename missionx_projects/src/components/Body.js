import './Body.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Project01 from './images/Project01.png'
import Project02 from './images/Project02.png'
import Project03 from './images/Project03.png'
import Project04 from './images/Project04.png'
import Project05 from './images/Project05.png'
import Project06 from './images/Project06.png'
import Project07 from './images/Project07.png'
import Project08 from './images/Project08.png'
import Project09 from './images/Project09.png'
import Project10 from './images/Project10.png'
import Project11 from './images/Project11.png'
import Project12 from './images/Project12.png'
import Project13 from './images/Project13.png'
import Project14 from './images/Project14.png'
import Project15 from './images/Project15.png'

export default function Body() {

    const [projects, setProjects] = useState([]);
    const [projects1, setProjects1] = useState([])



    useEffect(() => {
        axios.get('http://localhost:4000/project')
            .then(response => {
                console.log(response.data)
                setProjects(response.data)
            })
    }, [])

    useEffect(() => {
        axios.get('http://localhost:4000/project1')
            .then(response => {
                setProjects1(response.data)
                console.log(response.data)
            })
    }, [])


    // Subscription 
    const [subscriptionTier, setSubscriptionTier] = useState({
        free: true,
        subscription: true,
    });
    const [isFreeChecked, setIsFreeChecked] = useState(false) //Free checkbox checked = false
    const [isSubChecked, setIsSubChecked] = useState(false) //Subscription checkbox checked = false
    const freeFilter = projects.filter(item => item.subscription === 'free')
    const subFilter = projects.filter(item => item.subscription === 'subscription')
    const allFilter = freeFilter.concat(subFilter)
    const freeAndAnimation = projects1
    /*const allFilter = [...freeFilter, ...subFilter]*/

    // Activity type 
    const [activityTier, setActivityTier] = useState({
        animation: false,
        game: false,
        chatbot: false,
        'augmented reality': false,
    })
    const [isAnimationChecked, setIsAnimationChecked] = useState(false);
    const [isGameChecked, setIsGameChecked] = useState(false);
    const [isChatbotChecked, setIsChatbotChecked] = useState(false);
    const [isAugmentedRealityChecked, setIsAugmentedRealityChecked] = useState(false);
    const animationFilter = projects.filter(item => item.activity_type === 'animation');
    const gameFilter = projects.filter(item => item.activity_type === 'game');
    const chatbotFilter = projects.filter(item => item.activity_type === 'chatbot');
    const augmentedRealityFilter = projects.filter(item => item.activty_type === 'augmented reality');
    const beginner = projects.filter(item => item.course === 'beginner')
    const intermediate = projects.filter(item => item.course === 'intermediate')
    const gameAndFree = animationFilter.concat(gameFilter);
    const animationFreeFilter = projects1

    // Course type
    const [courseDifficulty, setCourseDifficulty] = useState({
        beginner: false,
        intermediate: false,
        advanced: false
    });
    const [isBeginnerClicked, setIsBeginnerClicked] = useState(false)
    const [isIntermediateClicked, setIsIntermediateClicked] = useState(false)
    const [isAdvancedClicked, setIsAdvancedClicked] = useState(false)
    const [highlight, setHighlight] = useState(0); // set colour of course type button when clicked
    const toggleButton = (number) => {
        setHighlight(number)
    };

    const toggleBeginner = (e) => {
        setCourseDifficulty('beginner')
    }

    let renderedProjects = [];

    if (subscriptionTier === 'free') {
        renderedProjects = freeFilter;
    } else if (subscriptionTier === 'subscription') {
        renderedProjects = subFilter;
    } else if (activityTier === 'animation') {
        renderedProjects = animationFilter
    } else if (activityTier === 'game') {
        renderedProjects = gameFilter
    } else if (activityTier === 'chatbot') {
        renderedProjects = chatbotFilter
    } else if (activityTier === 'augmented reality') {
        renderedProjects = augmentedRealityFilter
    } else if (activityTier === 'game' && activityTier === 'animation') {
        renderedProjects = gameAndFree
    } else if (courseDifficulty === 'beginner')
        renderedProjects = beginner
    else {
        renderedProjects = allFilter;
    }

    const handleSubscriptionFilterFree = (e) => { // toggle free filter
        console.log(e)
        if (isFreeChecked === true && isSubChecked === true) { // when free and subscription checkbox are checked  
            setIsFreeChecked(!isFreeChecked) // onClick unchecks free checkbox
            setSubscriptionTier('subscription') // leaving only subscription filter remaining
        } else if (isFreeChecked === true && isSubChecked === false) { // when sub is unchecked and free is checked
            setIsFreeChecked(false) // onclick unchecks free
            setSubscriptionTier(allFilter)
        } else if (isFreeChecked === false && isSubChecked === true) {
            setIsFreeChecked(true)
            setSubscriptionTier(allFilter)
        } else {
            setIsFreeChecked(!isFreeChecked)
            setSubscriptionTier("free")
        }
    }

    const handleSubscriptionFilterSub = (e) => { //toggle subscription filter
        if (isSubChecked === true && isFreeChecked === true) { /* if subscription checkbox is checked */
            setSubscriptionTier("free") /* set filter to none when unchecked */
            setIsSubChecked(!isSubChecked) /* set checkbox ot unchecked when clicked */
        } else if (isSubChecked === true && isFreeChecked === false) { // when free is unchecked and sub is checked
            setIsSubChecked(false) // onclick unchecks sub
            setSubscriptionTier(allFilter) // shows both free and sub 
        } else if (isSubChecked === false && isFreeChecked === true) {
            setIsSubChecked(true)
            setSubscriptionTier(allFilter)
        } else {
            setSubscriptionTier('subscription')
            setIsSubChecked(true)
        }
    }


    const handleActivityAnimation = (e) => {
        if (isAnimationChecked === false) {
            setIsAnimationChecked(true)
            setActivityTier('animation')
        } else {
            setIsAnimationChecked(false)
            setActivityTier(allFilter)
        }
    }

    const handleGame = (e) => {
        if (isGameChecked === false) {
            setIsGameChecked(true)
            setActivityTier('game')
        } else if (isGameChecked === true && isAnimationChecked === false) {
            setIsGameChecked(false)
            setActivityTier(allFilter)
        }
        else if (isGameChecked === true && isAnimationChecked === true) {
            setIsGameChecked(false)
            setActivityTier(allFilter)
        } else if (isGameChecked === false && isAnimationChecked === true) {
            setIsGameChecked(true)
            setActivityTier(gameAndFree)
        } else {
            setIsGameChecked(false)
            setActivityTier(allFilter)
        }
    }

    const handleChatbot = (e) => {
        if (isChatbotChecked === false) {
            setIsChatbotChecked(true)
            setActivityTier('chatbot')
        } else {
            setIsChatbotChecked(false)
            setActivityTier(allFilter)
        }
    }

    const handleAugmentedReality = (e) => {
        if (isAugmentedRealityChecked === false) {
            setIsAugmentedRealityChecked(true)
            setActivityTier('augmented reality')
        } else {
            setIsAugmentedRealityChecked(false)
            setActivityTier(allFilter)
        }
    }


    /*const handleActivityAnimation = (e) => {
        if (isAnimationChecked === false) {
            setIsAnimationChecked(true)
            setActivityTier('animation')
        } else if (isAnimationChecked === false && isFreeChecked === true) {
            setIsAnimationChecked(true)
            setActivityTier(projects1)
        } else {
            setIsAnimationChecked(false)
            setActivityTier(allFilter)
        }
    } */


    /*if (activityTier === 'Animation') {
        renderedActivityProjects = animationFilter;
        console.log(renderedProjects)
    } else if (activityTier === 'Game') {
        renderedActivityProjects = gameFilter
    } else if (activityTier === 'Chatbot') {
        renderedActivityProjects = chatbotFilter
    } else {
        renderedActivityProjects = augmentedRealityFilter
    }*/

    const toggleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    return (

        <div className="flex">
            <div className="width">
                <div className="left">
                    <div className="align">
                        <form>
                            <p>SUBSCRIPTION</p>
                            <input value='free' type='checkbox' checked={isFreeChecked} onClick={handleSubscriptionFilterFree}></input>
                            <label for="free" >Free</label><br />
                            <input value='sub' checked={isSubChecked} onClick={handleSubscriptionFilterSub} type='checkbox'></input>
                            <label for="subscription">Subscription</label>
                        </form>
                    </div>


                    <div className="align">
                        <form>
                            <p>ACTIVITY TYPE</p>
                            <input type='checkbox' checked={isAnimationChecked} onClick={handleActivityAnimation}></input>
                            <label for="animatation">Animation</label><br />
                            <input type='checkbox' checked={isGameChecked} onClick={handleGame}></input>
                            <label for="game">Game</label><br />
                            <input type='checkbox' checked={isChatbotChecked} onClick={handleChatbot}></input>
                            <label for="chatbot">Chatbot</label><br />
                            <input type='checkbox' checked={isAugmentedRealityChecked} onClick={handleAugmentedReality}></input>
                            <label for="augmented reality">Augmented reality</label>
                        </form>
                    </div>


                    <div className="align">
                        <form>
                            <p className='align'>YEAR LEVEL</p>
                            <input type='checkbox'></input>
                            <label for="1-4">1 - 4</label><br />
                            <input type='checkbox'></input>
                            <label for="5-6">5 - 6</label><br />
                            <input type='checkbox'></input>
                            <label for="7-8">7 - 8</label><br />
                            <input type='checkbox'></input>
                            <label for="9-13">9 - 13</label>
                        </form>
                    </div>


                    <div className="align">
                        <form>
                            <p>SUBJECT MATTER</p>
                            <input type='checkbox'></input>
                            <label for="computer science">Computer science</label><br />
                            <input type='checkbox'></input>
                            <label for="maths">Maths</label><br />
                            <input type='checkbox'></input>
                            <label for="science">Science</label><br />
                            <input type='checkbox'></input>
                            <label for="art">Art</label><br />
                            <input type='checkbox'></input>
                            <label for="music">Music</label>
                        </form>
                    </div>
                </div>

                <div></div>
                <div className="right">
                    <div>
                        <h1>PROJECTS</h1>
                        <p>Welcome to the project Library. You can use the filters on the right to help you search for specific projects.</p>
                    </div>

                    <div>
                        <div className="buttons">
                            <span className="buttons1">
                                <button onClick={() => {toggleButton(1); toggleBeginner()}} className={highlight === 1 ? "highlight individualButton1" : "individualButton1"}>BEGINNER</button>
                                <button onClick={() => toggleButton(2)} className={highlight === 2 ? "highlight individualButtonMid" : "individualButtonMid"}>INTERMEDIATE</button>
                                <button onClick={() => toggleButton(3)} className={highlight === 3 ? "highlight individualButton2" : "individualButton2"}>ADVANCED</button>
                            </span>

                            <span className="buttons2">
                                <span>SHOW</span>
                                <button className="numberedButton1">25</button>
                                <button className="numberedButtonMid">50</button>
                                <button className="numberedButton2">100</button>
                            </span>
                        </div>
                        <div className="projects">
                            {renderedProjects.map(project => (

                                <div key={project.project_id}>
                                    <img src={Project01} className="image" />
                                    <h1 className="center">{project.project_name}</h1>
                                    <div className="center1">
                                        <span>{project.activity_type}</span><span className="span">|</span><span>{project.course}</span>
                                    </div>
                                </div>

                            ))}
                        </div>

                        <div className="bottomButton">
                            <button className="backToTop" onClick={toggleScroll}>Back To Top</button>
                        </div>

                    </div>


                </div>
            </div>
        </div>

    )

}