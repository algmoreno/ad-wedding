'use client'
import React from 'react'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const PreRsvpForm = () => {
  const router = useRouter();
  let [partyId, setPartyId] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault();
    router.push(`/rsvp/${partyId.toLowerCase()}`); 
  };

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-sm space-y-10">
        <div>
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            Enter your RSVP code or scan QR code
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="col-span-2">
              <input
                id="rsvp-code"
                value={partyId}
                onChange={(e) => setPartyId(e.target.value)}
                required
                placeholder="ABC123"
                aria-label="Party code"
                className="block w-full rounded-t-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:outline-indigo-600 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PreRsvpForm