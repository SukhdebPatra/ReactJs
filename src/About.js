
import {useContext,useEffect} from 'react'
import noteContext from './Context/NoteContext'


function About() {
    const a=useContext(noteContext)
    useEffect(()=>{
        a.updateState()
    })
    
  return (
    <div>About
    <h1>this is about {a.state.name} and class {a.state.class} </h1>
    </div>
  )

}

export default About