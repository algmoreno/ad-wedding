'use client'
import { RsvpForm } from '@/components/index';
import { useState, useEffect, useRef } from 'react';

const page = () => {

  // get party details
  useEffect(() => {
    if (id) {
      axios.get(`/api/auth/appointments/${id}`)
        .then(res =>{setAppointment(res.data.appointment)})
        .catch(err => console.error(err));
    }
  }, [id]);

  return (
    <div className='py-8'>
      <RsvpForm/>
    </div>
  )
}

export default page