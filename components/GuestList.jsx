'use client'
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';

const GuestList = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fridayCount, setFridayCount] = useState(0)
  const [ceremonyCount, setCeremonyCount] = useState(0)
  const [receptionCount, setReceptionCount] = useState(0)

  // get all members
  useEffect(() => {
    axios.get(`/api/auth/member/`)
      .then(res =>{console.log(res);setMembers(res.data.Members); setLoading(false); attendanceCount()})
      .catch(err => console.error(err));
    
  }, []);

  // Make names uppercase 
  function capitalizeFirstLetter(name) {
    if (typeof name !== 'string' || name.length === 0) {
      return name; // Handle non-string or empty inputs
    }
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  function attendanceCount(event) {
    let count = 0
    members.forEach((member, index) => {
      if (member.attendingFriday && event == "friday") {
        count++
      }
      if (member.attendingCeremony && event == "ceremony") {
        count++
      }
      if (member.attendingReception && event == "reception") {
        count++
      }
    })
    return count
  }

  // Convert bool to yes or no
  function boolToYesNo(attendingBool) {
    if (attendingBool) {
      return "yes"
    }else {
      return "no"
    }
  }

  return (
    <div className="block">
      <div className="m-auto mt-8 flow-root overflow-scroll h-[400px] w-[1500px] bg-white border-2 font-business">
        <div className="m-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <table className="w-full text-left">
            <thead className="bg-white">
              <tr>
                <th scope="col" className="relative isolate py-3.5 pr-3 text-left text-sm font-semibold text-gray-900">
                  Name
                  <div className="absolute inset-y-0 right-full -z-10 w-screen border-b border-b-gray-200" />
                  <div className="absolute inset-y-0 left-0 -z-10 w-screen border-b border-b-gray-200" />
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Party ID
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                >
                  Friday Dinner
                </th>
                <th
                  scope="col"
                  className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 md:table-cell"
                >
                  Ceremony & Lunch
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Reception
                </th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                  Dietary Restrictions
                </th>
                <th scope="col" className="py-3.5 pl-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member._id}>
                  <td className="relative py-4 pr-3 text-sm font-medium text-gray-900">
                    {capitalizeFirstLetter(member.firstName)} {capitalizeFirstLetter(member.lastName)}
                    <div className="absolute right-full bottom-0 h-px w-screen bg-gray-100" />
                    <div className="absolute bottom-0 left-0 h-px w-screen bg-gray-100" />
                  </td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{member.party.partyId}</td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{boolToYesNo(member.attendingFriday)}</td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{boolToYesNo(member.attendingCeremony)}</td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">{boolToYesNo(member.attendingReception)}</td>
                  <td className="hidden px-3 py-4 text-sm text-gray-500 md:table-cell">{member.dietaryRestrictions}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex m-auto p-2 border-1 gap-6 items-center w-[1500px] font-business bg-black ">
          <div className="m-auto">
            <div className="flex gap-20 text-blue-500">
            <h1 className="text-xl">
              Totals
            </h1>
              <h1>
                Friday: {attendanceCount("friday")}
              </h1>
              <h1>
                Ceremony & Lunch: {attendanceCount("ceremony")}
              </h1>
              <h1>
                Reception: {attendanceCount("reception")}
              </h1>
            </div>
          </div>
        </div>
    </div>
  )
 }

export default GuestList