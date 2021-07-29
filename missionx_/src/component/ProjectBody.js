import './ProjectBody.css'
import axios from 'axios';
import { useState, useEffect } from 'react';
import Project01 from './projectimages/Project01.png'
import ProjectHeader from './ProjectHeader'
import ProjectFooter from './ProjectFooter'


export default function ProjectBody() {

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
    const [activityTier, setActivityTier] = useState()
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
    const advanced = projects.filter(item => item.course === 'advanced')
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

    const toggleIntermediate = (e) => {
        setCourseDifficulty('intermediate')
    }

    const toggleAdvanced = (e) => {
        setCourseDifficulty('advanced')
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
    } else if (courseDifficulty === 'beginner') {
        renderedProjects = beginner
    } else if (courseDifficulty === 'intermediate') {
    renderedProjects = intermediate
    } else if (courseDifficulty === 'advanced') {
        renderedProjects = advanced
    }else {
        renderedProjects = allFilter;
    }

    const handleSubscriptionFilterFree = (e) => { // toggle free filter
        console.log(e)
        if (isFreeChecked === true && isSubChecked === true) { // when free and subscription checkbox are checked  
            setIsFreeChecked(!isFreeChecked) // onClick unchecks free checkbox
            setSubscriptionTier('subscription') // leaving only subscription filter remaining
            setCourseDifficulty('')
            toggleButton(0)
        } else if (isFreeChecked === true && isSubChecked === false) { // when sub is unchecked and free is checked
            setIsFreeChecked(false) // onclick unchecks free
            setSubscriptionTier(allFilter)
            setCourseDifficulty('')
            toggleButton(0)
        } else if (isFreeChecked === false && isSubChecked === true) {
            setIsFreeChecked(true)
            setSubscriptionTier(allFilter)
            setCourseDifficulty('')
            toggleButton(0)
        } else {
            setIsFreeChecked(!isFreeChecked)
            setSubscriptionTier("free")
            setCourseDifficulty('')
            toggleButton(0)
        }
    }

    const handleSubscriptionFilterSub = (e) => { //toggle subscription filter
        if (isSubChecked === true && isFreeChecked === true) { /* if subscription checkbox is checked */
            setSubscriptionTier("free") /* set filter to none when unchecked */
            setIsSubChecked(!isSubChecked) /* set checkbox ot unchecked when clicked */
            setCourseDifficulty('')
            toggleButton(0)
        } else if (isSubChecked === true && isFreeChecked === false) { // when free is unchecked and sub is checked
            setIsSubChecked(false) // onclick unchecks sub
            setSubscriptionTier(allFilter) // shows both free and sub 
            setCourseDifficulty('')
            toggleButton(0)
        } else if (isSubChecked === false && isFreeChecked === true) {
            setIsSubChecked(true)
            setSubscriptionTier(allFilter)
            setCourseDifficulty('')
            toggleButton(0)
        } else {
            setSubscriptionTier('subscription')
            setIsSubChecked(true)
            setCourseDifficulty('')
            toggleButton(0)
        }
    }


    const handleActivityAnimation = (e) => {
        if (isAnimationChecked === false) {
            setIsAnimationChecked(true)
            setActivityTier('animation')
            setCourseDifficulty('')
            toggleButton(0)
        } else {
            setIsAnimationChecked(false)
            setActivityTier(allFilter)
            setCourseDifficulty('')
            toggleButton(0)
        }
    }

    const handleGame = (e) => {
        if (isGameChecked === false) {
            setIsGameChecked(true)
            setActivityTier('game')
            setCourseDifficulty('')
            toggleButton(0)
        } else if (isGameChecked === true && isAnimationChecked === false) {
            setIsGameChecked(false)
            setActivityTier(allFilter)
            setCourseDifficulty('')
            toggleButton(0)
        }
        else if (isGameChecked === true && isAnimationChecked === true) {
            setIsGameChecked(false)
            setActivityTier(allFilter)
            setCourseDifficulty('')
            toggleButton(0)
        } else if (isGameChecked === false && isAnimationChecked === true) {
            setIsGameChecked(true)
            setActivityTier(gameAndFree)
            setCourseDifficulty('')
            toggleButton(0)
        } else {
            setIsGameChecked(false)
            setActivityTier(allFilter)
            setCourseDifficulty('')
            toggleButton(0)
        }
    }

    const handleChatbot = (e) => {
        if (isChatbotChecked === false) {
            setIsChatbotChecked(true)
            setActivityTier('chatbot')
            setCourseDifficulty('')
            toggleButton(0)
        } else {
            setIsChatbotChecked(false)
            setActivityTier(allFilter)
            setCourseDifficulty('')
            toggleButton(0)
        }
    }

    const handleAugmentedReality = (e) => {
        if (isAugmentedRealityChecked === false) {
            setIsAugmentedRealityChecked(true)
            setActivityTier('augmented reality')
            setCourseDifficulty('')
            toggleButton(0)
        } else {
            setIsAugmentedRealityChecked(false)
            setActivityTier(allFilter)
            setCourseDifficulty('')
            toggleButton(0)
        }
    }


    const toggleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    return (
        <div>
            <ProjectHeader />
            <div className="flex">
                <div className="width">
                    <div className="left">
                        <div className="alignFilter">
                            <form>
                                <p className='borderUnderline'>SUBSCRIPTION</p>
                                <input value='free' type='checkbox' checked={isFreeChecked} onClick={handleSubscriptionFilterFree}></input>
                                <label for="free" >Free</label><br />
                                <input value='sub' checked={isSubChecked} onClick={handleSubscriptionFilterSub} type='checkbox'></input>
                                <label for="subscription">Subscription</label>
                            </form>
                        </div>


                        <div className="alignFilter">
                            <form>
                                <p className='borderUnderline'>ACTIVITY TYPE</p>
                                <input type='checkbox' checked={isAnimationChecked} onClick={handleActivityAnimation}></input>
                                <label for="animatation">Animation</label><br />
                                <input type='checkbox' checked={isGameChecked} onClick={handleGame}></input>
                                <label for="game">Game</label><br />
                                <input type='checkbox' checked={isChatbotChecked} onClick={handleChatbot}></input>
                                <label for="chatbot">Chatbot</label><br />
                                <input type='checkbox' checked={isAugmentedRealityChecked} onClick={handleAugmentedReality}></input>
                                <label for="augmented reality">Augmented Reality</label>
                            </form>
                        </div>


                        <div className="alignFilter">
                            <form>
                                <p className='borderUnderline'>YEAR LEVEL</p>
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


                        <div className="alignFilter">
                            <form>
                                <p className='borderUnderline'>SUBJECT MATTER</p>
                                <input type='checkbox'></input>
                                <label for="computer science">Computer science</label><br />
                                <input type='checkbox'></input>
                                <label for="maths">Maths</label><br />
                                <input type='checkbox'></input>
                                <label for="science">Science</label><br />
                                <input type='checkbox'></input>
                                <label for="art">Art</label><br />
                                <input type='checkbox'></input>
                                <label for="music">Music</label><br />
                                <input type='checkbox'></input>
                                <label for="language">Language</label>
                            </form>
                        </div>
                    </div>

                    <div></div>
                    <div className="right">
                        <div>
                            <h1>PROJECTS</h1>
                            <p>Welcome to the project Library. You can use the filters on the right to help you search for specific projects.</p>
                        </div>

                        <div className="topFilter">
                            <div className="buttons">
                                <span className="buttons1">
                                    <button onClick={() => { toggleButton(1); toggleBeginner() }} className={highlight === 1 ? "highlight individualButton1" : "individualButton1"}>BEGINNER</button>
                                    <button onClick={() => { toggleButton(2); toggleIntermediate() }} className={highlight === 2 ? "highlight individualButtonMid" : "individualButtonMid"}>INTERMEDIATE</button>
                                    <button onClick={() => { toggleButton(3); toggleAdvanced() }} className={highlight === 3 ? "highlight individualButton2" : "individualButton2"}>ADVANCED</button>
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
                                        <img src={project.project_pic} className="projectImage" />
                                        <h1 className="center">{project.project_name}</h1>
                                        <div className="center1">
                                            <span>{project.course.toUpperCase()}</span><span className="span">|</span><span>{project.activity_type[0].toUpperCase() + project.activity_type.slice(1).toLowerCase()}</span>
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

            <div>
                <ProjectFooter />
            </div>
        </div>

    )

}