'use client'
import React from 'react'
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const RsvpForm = ({ params }) => {
  const { id } = useParams();

  const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
    { name: 'Tom Cook', title: 'Director of Product', email: 'tom.cook@example.com', role: 'Member' },
    { name: 'Whitney Francis', title: 'Copywriter', email: 'whitney.francis@example.com', role: 'Admin' },
    { name: 'Leonard Krasner', title: 'Senior Designer', email: 'leonard.krasner@example.com', role: 'Owner' },
    { name: 'Floyd Miles', title: 'Principal Designer', email: 'floyd.miles@example.com', role: 'Member' },
  ]
  // get party details
  useEffect(() => {
    if (id) {
      console.log(id)
      // axios.get(`/api/auth/party/${id}`)
      //   .then(res =>{setAppointment(res.data.appointment)})
      //   .catch(err => console.error(err));
    }
  }, [id]);

  return (
    <div className="px-4 sm:px-6 lg:px-8">
        <h1>RSVP</h1>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <p className="mt-2 text-sm text-gray-700">
            Please select all event each person will be attending
          </p>
        </div>

      </div>
      <div className="mt-8 flow-root">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="divide-x divide-gray-200">
                  <th scope="col" className="py-3.5 pr-4 pl-4 text-left text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Friday Dinner
                  </th>
                  <th scope="col" className="px-4 py-3.5 text-left text-sm font-semibold text-gray-900">
                    Ceremony & Lunch
                  </th>
                  <th scope="col" className="py-3.5 pr-4 pl-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                    Reception
                  </th>
                  <th scope="col" className="py-3.5 pr-4 pl-4 text-left text-sm font-semibold text-gray-900 sm:pr-0">
                    Dietary Restrictions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {people.map((person) => (
                  <tr key={person.email} className="divide-x divide-gray-200">
                    <td className="py-4 pr-4 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                      {person.name}
                    </td>
                    <td className="p-4 text-sm whitespace-nowrap text-gray-500">{person.title}</td>
                    <td className="p-4 text-sm whitespace-nowrap text-gray-500">{person.email}</td>
                    <td className="py-4 pr-4 pl-4 text-sm whitespace-nowrap text-gray-500 sm:pr-0">{person.role}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default RsvpForm