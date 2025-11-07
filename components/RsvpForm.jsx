'use client'
import axios from 'axios';
import React from 'react'
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

const RsvpForm = ({ params }) => {
  const { id } = useParams();
  const [members, setMembers] = useState([]);
  const [party, setParty] = useState();
  const [loading, setLoading] = useState(true);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
 

  // get party using id
  useEffect(() => {
    axios.get(`/api/auth/party/${id}`)
      .then(res =>{console.log(res);setMembers(res.data.party.members); setParty(res.data.party);setLoading(false)})
      .catch(err => console.error(err));
  }, []);

  const handleSave = async(e) => {
    e.preventDefault();
    setPending(false);
    setError(null)
    console.log(party)
    // add party
    // try {
    //   const response = await axios.post('/api/auth/party', party)
    //   setPending(false);
    //   setParty({partyId: "", fridayInvite: false})
    //   toast.success(response.data.message);
    // } catch (err) {
    //   console.log(err);
    //   //setError(err.response.data.message);
    //   setPending(false);
    // }
  }

  // Make first letter uppercase 
  function capitalizeFirstLetter(name) {
    if (typeof name !== 'string' || name.length === 0) {
      return name; // Handle non-string or empty inputs
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 mt-10">
      <div className="flex">
        <h1 className="m-auto">RSVP</h1>
      </div>
      <div className="sm:flex sm:items-center">
        <div className="flex sm:flex-auto">
          <p className="m-auto mt-2 text-sm text-gray-700">
            Please select all events each person will be attending
          </p>
        </div>

      </div>
      <div className="mt-8 flow-root  border-1 p-2">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr className="divide-x divide-gray-200 p-2">
                  <th scope="col" className="py-3.5 pr-4 pl-4 text-center text-sm font-semibold text-gray-900 sm:pl-0">
                    Name
                  </th>
                  {party?.fridayInvite ? (
                  <th scope="col" className="px-4 py-3.5 text-center text-sm font-semibold text-gray-900">
                    Friday Dinner
                  </th>
                  ) : (
                    <></>
                  )}
                  <th scope="col" className="px-4 py-3.5 text-center text-sm font-semibold text-gray-900">
                    Ceremony & Lunch
                  </th>
                  <th scope="col" className="py-3.5 pr-4 pl-4 text-center text-sm font-semibold text-gray-900 sm:pr-0">
                    Reception
                  </th>
                  <th scope="col" className="py-3.5 pr-4 pl-4 text-center text-sm font-semibold text-gray-900 sm:pr-0">
                    Dietary Restrictions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white p-2">
                {members.map((member) => (
                  <tr key={member._id} className="divide-x divide-gray-200 text-center">
                    <td className="py-4 pr-4 pl-4 text-sm whitespace-nowrap text-gray-900 sm:pl-0">
                    {capitalizeFirstLetter(member.firstName)} {capitalizeFirstLetter(member.lastName)}
                    </td>
                    <td>
                      <input type="checkbox" checked={member.attendingFriday} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                    </td>
                    <td>
                      <input type="checkbox" checked={member.attendingCeremony} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                    </td>
                    <td>
                      <input type="checkbox" checked={member.attendingReception} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                    </td>
                    <td>
                      <textarea
                        id="comment"
                        name="comment"
                        rows={2}
                        className="flex w-full m-auto rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
                        defaultValue={''}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex">
              <button onClick={handleSave} className="border-1 bg-blue-500 p-2 text-white mt-5 ml-auto rounded-md">Save</button>
            </div>
          </div>
        </div>
                
      </div>
      
    </div>
  )
}

export default RsvpForm