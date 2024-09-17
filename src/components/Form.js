import React, { useState } from 'react'

function Form({onSubmit}){

    const [formData, setFormData] = useState({
        name: '',
        age:'',
        email: '',
        phone: '',
        experience: '',
        education: '',
        skills: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
      };

  return (
    <form onSubmit={handleSubmit}>
    <p>Preencha as informações a baixo e clique em <span className='font-bold'>Gerar Currículo</span>.</p>
      <input 
      name='name'
      placeholder='Nome Completo'
      value={formData.name}
      onChange={handleChange}
      className='border-2 p-1 my-2 w-full rounded-md outline-blue-300'
      />
      <input 
      name='email'
      placeholder='Email'
      value={formData.email}
      onChange={handleChange}
      className='border-2 p-1 my-2 w-full rounded-md outline-blue-300'
      />
      <input 
      name='age'
      type='number'
      placeholder='Idade'
      value={formData.age}
      onChange={handleChange}
      className='border-2 p-1 my-2 w-full rounded-md outline-blue-300'
      />
      <input 
      name='phone'
      placeholder='Telefone'
      value={formData.phone}
      onChange={handleChange}
      className='border-2 p-1 my-2 w-full rounded-md outline-blue-300'
      />
      <textarea
        name='experience'
        placeholder='Experiência profissional'
        value={formData.experience}
        onChange={handleChange}
        className='border-2 p-1 my-2 w-full rounded-md outline-blue-300'
      >
      </textarea>
      <textarea
        name='education'
        value={formData.education}
        onChange={handleChange}
        placeholder='Escolaridade (Escola - Período)'
        className='border-2 p-1 my-2 w-full rounded-md outline-blue-300'
      >
      </textarea>
      <textarea
        name='skills'
        placeholder='Habilidades'
        value={formData.skills}
        onChange={handleChange}
        className='border-2 p-1 my-2 w-full rounded-md outline-blue-300'
      >
      </textarea>
      <button
      type='submit'
        className='bg-blue-600 w-full py-1 rounded-md text-white font-bold'
      >
        Gerar Currículo
      </button>
    </form>
  )
}

export default Form
