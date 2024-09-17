import React from 'react'
import Form from './components/Form'
function App(){
  return (
    <div className='w-full min-h-screen flex justify-center px-4'>
      <main className='my-8 w-full md:max-w-2xl'>
        <h1 className='text-3xl text-gray-950 font-bold'>Gerador de <span className='text-blue-600'>Currículo</span></h1>
        <Form/>
      </main>
    </div>
  )
}

export default App

