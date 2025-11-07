'use client'
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { toast } from "sonner";

const NewMemberForm = () => {
  const [member, setMember] = useState({
    partyId: "",
    firstName: "",
    lastName: ""
  })
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setPending(false);
    setError(null)

    // add party
    try {
      const response = await axios.post('/api/auth/member', member)
      setPending(false);
      toast.success(response.data.message);
    } catch (err) {
      console.log(err);
      //setError(err.response.data.message);
      setPending(false);
    }
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8 font-business">
        <div className="w-full max-w-sm space-y-10 border-2 p-10">
          <div>
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Create Member
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="col-span-2 mb-2">
                <input
                  id="party-id"
                  value={member.partyId}
                  onChange={(e) => setMember({...member, partyId:e.target.value})}
                  required
                  placeholder="party id"
                  aria-label="Party code"
                  className="block w-full rounded-t-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:outline-blue-600 sm:text-sm"
                />
              </div>
              <div className="-mt-px mb-2">
                <input
                    id="first-name"
                    value={member.firstName}
                    onChange={(e) => setMember({...member, firstName:e.target.value})}
                    required
                    placeholder="first name"
                    aria-label="first name"
                    className="block w-full rounded-t-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:outline-blue-600 sm:text-sm"
                  />
              </div>
              <div className="-mt-px">
                <input
                    id="last-name"
                    value={member.lastName}
                    onChange={(e) => setMember({...member, lastName:e.target.value})}
                    required
                    placeholder="last name"
                    aria-label="last name"
                    className="block w-full rounded-t-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:outline-blue-600 sm:text-sm"
                  />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default NewMemberForm