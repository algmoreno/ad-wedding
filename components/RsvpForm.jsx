'use client'
import axios from 'axios';
import React from 'react'
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { toast } from "sonner";

const RsvpForm = ({ params }) => {
  const { id } = useParams();
  const [members, setMembers] = useState([]);
  const [party, setParty] = useState();
  const [changesSaved, setChangesSaved] = useState(false)
  const [loading, setLoading] = useState(true);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);
 

  // get party using id
  useEffect(() => {
    axios
      .get(`/api/auth/party/${id}`)
      .then((res) => {
        console.log(res)
        setParty(res.data.party);
        setMembers(res.data.party.members || []);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [id]);

  const handleSave = async(e) => {
    e.preventDefault();
    setPending(false);
    setError(null)
    // update party
    try {
      const res = await fetch(`/api/auth/party/${party.partyId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ members }),
      });
      console.log(res)
      //toast.success(res.data.message);
      setChangesSaved(true)
      redirect()
    } catch (err) {
      console.log(err);
      //setError(err.response.data.message);
      setPending(false);
    }
  }

  const handleCheckboxChange = (index, field) => {
    setMembers((prev) => {
      if (!prev[index]) return prev; // safety guard
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [field]: !updated[index][field],
      };
      return updated;
    });
  };

  const handleMemberChange = (index, field, value) => {
    setMembers((prev) => {
      if (!prev[index]) return prev;
      const updated = [...prev];
      updated[index] = {
        ...updated[index],
        [field]: value,
      };
      return updated;
    });
  };

  // Make first letter uppercase 
  function capitalizeFirstLetter(name) {
    if (typeof name !== 'string' || name.length === 0) {
      return name; // Handle non-string or empty inputs
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  if (loading) return (
    <div className="px-4 sm:px-6 lg:px-8 mt-10">
      <p>Loading...</p>
    </div>
  )

  if (changesSaved) {
    return (
      <div className="flex px-4 sm:px-6 lg:px-8 mt-10">
        <div className="m-auto">
          <h1 className="text-5xl">Thank you!</h1>
        </div>
      </div>
    )
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
                  {party?.fridayInvite && (
                  <th scope="col" className="px-4 py-3.5 text-center text-sm font-semibold text-gray-900">
                    Friday Dinner
                  </th>
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
                {members.map((member, index) => (
                  <tr key={member._id} className="divide-x divide-gray-200 text-center">
                    <td className="py-4 pr-4 pl-4 text-sm whitespace-nowrap text-gray-900 sm:pl-0">
                    {capitalizeFirstLetter(member.firstName)} {capitalizeFirstLetter(member.lastName)}
                    </td>
                    {party?.fridayInvite && (                    
                    <td>
                      <input type="checkbox" checked={!!member.attendingFriday} onChange={() => handleCheckboxChange(index, "attendingFriday")} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                    </td>)}
                    <td>
                      <input type="checkbox" checked={!!member.attendingCeremony} onChange={() => handleCheckboxChange(index, "attendingCeremony")} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                    </td>
                    <td>
                      <input type="checkbox" checked={!!member.attendingReception} onChange={() => handleCheckboxChange(index, "attendingReception")} className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/>
                    </td>
                    <td>
                      <textarea
                        id={`dietaryRestrictions-${index}`}
                        name="dietaryRestrictions"
                        rows={2}
                        placeholder="e.g., vegetarian, no peanuts"
                        value={member.dietaryRestrictions || ""}
                        onChange={(e) =>
                          handleMemberChange(index, "dietaryRestrictions", e.target.value)
                        }
                        className="flex w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-blue-600 sm:text-sm"
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