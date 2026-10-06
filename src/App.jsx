import React from 'react'
import { useState } from 'react'
import { X } from 'lucide-react'

const App = () => {
  const [details, setDetails] = useState('')
  const [title, setTitle] = useState('')
  const [task, setTask] = useState([])

const submitHandler = (e) => {
  e.preventDefault();
  const copyTask = [...task]
  copyTask.push({title, details})
  setTask(copyTask)
  console.log('Form submitted' , title, details);
  setTitle('')
  setDetails('')

}
const deleteHandler = (idx) => {
  
  const deleteTask = [...task]
  deleteTask.splice(idx,1);
  setTask(deleteTask)

}

  return (
    <div className='h-screen lg:flex bg-amber-50 '>
      <form className=' gap-4 flex lg:w-1/2 flex-col items-start  p-10  ' 
      onSubmit={(e) => submitHandler(e)}
      >
          <h1 className='text-3xl font-bold text-amber-900'>Add Notes </h1>
          <input type='text' 
          placeholder='Enter your notes heading'
          className='px-5 py-2 border-2 rounded font-medium outline-none '
            value={title}
          onChange={(e) => setTitle(e.target.value)} />

          <textarea placeholder='Enter your notes here' 
          className='px-5 py-2  h-32 border-2 rounded font-medium flex items-start flex-row' 
          value={details}
          onChange={(e) => setDetails(e.target.value)}   />
          <button className='bg-amber-700 text-white font-medium rounded-2xl px-5 py-2 active:bg-amber-400 ' >Add Notes</button>
        
        {/* <img src='https://png.pngtree.com/png-clipart/20230522/original/pngtree-sticky-notes-png-image_9167205.png'  className='h-80'/> */}
      </form>
      
      <div className=' gap-10  bg-cyan-400 lg:border-l-2 lg: w-1/2  p-10 '>
      <h1 className='text-3xl font-bold text-amber-950'>Recent Notes </h1>
      <div className="flex gap-5 mt-5 items-start justify-start flex-wrap h-[90%]  overflow-auto  ">
        {task.map(function (elem, idx){

            return <div key={idx} className=" relative h-52 w-40 bg-top rounded-2xl bg-amber-500 px-4 py-8 bg-[url('https://png.pngtree.com/png-clipart/20230522/original/pngtree-sticky-notes-png-image_9167205.png')]">
              <button className='absolute top-1 right-1 cursor-pointer active:scale-95 bg-red-700 text-xs p-1 rounded-2xl' onClick={() => {deleteHandler(idx)}}><X/></button>
              <h2 className='text-3xl font-bold text-amber-900  '>{elem.title}</h2>
              <p className='text-amber-800'>{elem.details}</p>
            </div>
        })}
      </div>
        
      </div>
      
    </div>
  )
}

export default App