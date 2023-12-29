
import './App.css'

function Greetings (){
  return(
  <>
    <h1>Describing Zayed khan</h1>
    <Person />
    <Message />
  </>
  )
}

function Person(){
  return <h1>Zayed khan</h1>
}

function Message (){
  return <h2>Banglar Tiger...</h2>
}

function App() {
  

  return (
    <>
      <h1 className="text-5xl  text-center mt-12">hello world </h1>
      <button className="btn btn-secondary">secondary</button>
      <Greetings />
    </>
  )
}

export default App
