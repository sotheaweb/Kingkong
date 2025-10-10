import React from 'react'
import Hero from '../components/contact/Hero'
import Form from '../components/contact/Form'
import map from '../assets/map.png'
import Map from '../components/contact/Map'

const Contact = () => {
  return (
    <div className='w-full'>
      <Hero />
      <Form />
      <Map />
    </div>
  )
}

export default Contact
