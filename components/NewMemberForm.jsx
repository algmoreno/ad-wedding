'use client'
import React from 'react'
import { useState } from 'react';

const NewMemberForm = () => {
  let [rsvpCode, setRsvpCode] = useState("")
  let [firstName, setFirstName] = useState("")
  let [lastName, setLastName] = useState("")
  let [dietaryRes, setDietaryRes] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault(); 
    router.push(`/rsvp/${rsvpCode}`); 
  };

  return (
    <>
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8 ">
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
                  id="rsvp-code"
                  value={rsvpCode}
                  onChange={(e) => setRsvpCode(e.target.value)}
                  required
                  placeholder="party id"
                  aria-label="Party code"
                  className="block w-full rounded-t-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:outline-blue-600 sm:text-sm"
                />
              </div>
              <div className="-mt-px mb-2">
                <input
                    id="first-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    required
                    placeholder="first name"
                    aria-label="first name"
                    className="block w-full rounded-t-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:outline-blue-600 sm:text-sm"
                  />
              </div>
              <div className="-mt-px">
                <input
                    id="last-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
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