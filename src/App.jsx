import React from 'react'
import { useState } from 'react'
import { X } from 'lucide-react';




function App() {
  const [title, settitle] = useState('')
  const [title2, settitle2] = useState('')
  const [task, settask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    console.log('Form submitted', title, title2);
    settitle('')
    settitle2('')

    const copyTask = [...task];
    copyTask.push({ title, title2 })

    settask(copyTask);

    console.log(copyTask);

  }



  function Call1(e) {
    e.preventDefault();




    console.log(e.target.value)
    settitle(e.target.value);

  }

  function deleteNote(index) {
    const copyTask = [...task];
    console.log("deleted ${index}",index);
    copyTask.splice(index, 1);
    settask(copyTask);
  }

  return (
    // <div className='h-full lg:flex bg-black text-white '>
    <div className='min-h-screen lg:flex bg-black text-white'>


      <form onSubmit={submitHandler} className='flex gap-4 lg:w-1/2  flex-col items-start p-10'>

        <h1 className='text-3xl font-bold'>Add Notes</h1>

        <input

          type="text"
          placeholder='Enter Notes Heading'
          className='px-5 w-full py-2 font-medium border-2 outline-none rounded'
          value={title}
          onChange={Call1}
        />

        <textarea

          type="text"
          placeholder='Write details'
          value={title2}
          onChange={(e) => { settitle2(e.target.value); e.preventDefault(); console.log(e.target.value) }}
          className='px-5 w-full h-20 py-2 font-medium  flex items-start flex-row border-2 outline-none rounded'
        />

        <button
          className="
    bg-white text-black w-full px-5 py-2 rounded
    transition-all duration-150
    hover:bg-gray-200
    active:bg-black active:text-white
    active:scale-95
  "
        >
          Add Note
        </button>

        {/* <img className = 'h-80' src="https://img.freepik.com/premium-vector/cute-fruit-memo-note-design-template_894167-857.jpg?semt=ais_hybrid"/>
        */}
      </form>

      <div className="lg:w-1/2 border-l-2 p-10 flex flex-col">
        <h1 className="text-3xl font-bold">Recent Notes</h1>

        <div className="flex-1 mt-5 overflow-y-auto">
          <div className="flex flex-wrap gap-x-5 gap-y-9">
            {task.map((elem, index) => (
              <div
                key={index} className=" flex justify-between flex-col h-52 w-40 p-4 rounded-xl text-black bg-center bg-cover bg-[url('https://images.all-free-download.com/images/graphiclarge/note_pad_clip_art_25802.jpg')]"
              >
                <div>
                  <h1 className="mb-2 py-2 text-xl font-bold leading-tight">
                  {elem.title}
                  </h1>
                  <p className="font-medium mt-3 text-gray-500">{elem.title2}</p>
                 
                </div>
                  <button onClick={ () => deleteNote(index)} className=' w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-x4 rounded font-bold text-white'>Delete</button>
              
              </div>
              
           
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}


export default App