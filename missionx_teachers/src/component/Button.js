import './Button.css'

export default function Button() {
  return (
    <div className='layoutButton'>
      <button className='buttonIndividual takeScreenshot'>Take Screenshot</button>
      <button className='buttonIndividual helpCenter'>Help Center</button>
      <button className='buttonIndividual moreProjects'>More Projects</button>
    </div>
  )
}