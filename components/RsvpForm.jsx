'use client'
import React from 'react'
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const RsvpForm = ({ params }) => {
  const { id } = useParams();
  // get party details
  useEffect(() => {
    if (id) {
      console.log(id)
      // axios.get(`/api/auth/appointments/${id}`)
      //   .then(res =>{setAppointment(res.data.appointment)})
      //   .catch(err => console.error(err));
    }
  }, [id]);

  return (
    <div id="booking" className="flex mt-20 h-[1000px] max-w-6xl m-auto">
      RSVP
    </div>
  )
}

export default RsvpForm