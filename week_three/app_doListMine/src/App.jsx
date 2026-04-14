import './App.css'
import image from './photo1.avif'
import imageTwo from './photo3.avif'
import { ToDoList } from './ToDoList'



function App() {
 
  return (
    <div className='app'>
      <div className='container'>
      <img src={ image } width="300px" alt="toDoList" />
      </div>
      <div className='container'>
        <h1>To Do List</h1>
      </div>
      <ToDoList/>
      <div className='container'>
        <img src={imageTwo} width='200px' alt="planning" />
      </div>
    </div>
  )
}

export default App
