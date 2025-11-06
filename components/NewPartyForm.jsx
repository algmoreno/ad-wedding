'use client'
import axios from 'axios';
import React from 'react'
import { useState } from 'react';

const NewPartyForm = () => {
  const [party, setParty] = useState({
    partyId: "",
    fridayInvite: false
  })
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async(e) => {
    e.preventDefault();
    setPending(false);
    setError(null)

    // add party
    try {
      const response = await axios.post('/api/auth/party', party)
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
      <div className="flex min-h-full items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-sm space-y-10 border-2 p-10">
          <div>
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Create Party
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="col-span-2">
              <input
                id="party-id"
                value={party.partyId}
                onChange={(e) => setParty({...party, partyId:e.target.value})}
                required
                placeholder="party id"
                aria-label="Party id"
                className="block w-full rounded-t-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:relative focus:outline-2 focus:outline-blue-600 sm:text-sm"
              />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex gap-3">
                <div className="flex h-6 shrink-0 items-center">
                  <div className="group grid size-4 grid-cols-1">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      checked={party.fridayInvite}
                      onChange={(e) => setParty({...party, fridayInvite:e.target.checked})}
                      className="col-start-1 row-start-1 appearance-none rounded-sm border border-gray-300 bg-white checked:border-blue-600 checked:bg-blue-600 indeterminate:border-blue-600 indeterminate:bg-blue-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:checked:bg-gray-100 forced-colors:appearance-auto"
                    />

                  </div>
                </div>
                <label htmlFor="remember-me" className="block text-sm/6 text-gray-900">
                  Friday Invite?
                </label>
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

export default NewPartyForm