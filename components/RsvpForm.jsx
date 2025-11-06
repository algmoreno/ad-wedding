'use client'
import axios from 'axios';
import React from 'react'
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const RsvpForm = ({ params }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [members, setMembers] = useState([]);
 

  // get party using id
  useEffect(() => {
    axios.get(`/api/auth/party/${id}`)
      .then(res =>{console.log(res);setMembers(res.data.party.members); setLoading(false)})
      .catch(err => console.error(err));
  }, []);

    // Make names uppercase 
    function capitalizeFirstLetter(name) {
      if (typeof name !== 'string' || name.length === 0) {
        return name; // Handle non-string or empty inputs
      }
      return name.charAt(0).toUpperCase() + name.slice(1);
    }

  return (
    <div className="px-4 sm:px-6 lg:px-8">
        <h1>RSVP</h1>
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <p className="mt-2 text-sm text-gray-700">
            Please select all events each person will be attending
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
                {members.map((member) => (
                  
                  <tr key={member._id} className="divide-x divide-gray-200">
                    <td className="py-4 pr-4 pl-4 text-sm font-medium whitespace-nowrap text-gray-900 sm:pl-0">
                    {capitalizeFirstLetter(member.firstName)} {capitalizeFirstLetter(member.lastName)}
                    </td>
                    
                    <td className="p-4 text-sm whitespace-nowrap text-gray-500">{member.attendingFriday}</td>
                    <td className="p-4 text-sm whitespace-nowrap text-gray-500">{member.attendingCeremony}</td>
                    <td className="p-4 text-sm whitespace-nowrap text-gray-500">{member.attendingReception}</td>
                    <td className="p-4 text-sm whitespace-nowrap text-gray-500">{member.dietaryRestrictions}</td>
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