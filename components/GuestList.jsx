'use client'
import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react';

const GuestList = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [firstLoad, setFirstLoad] = useState(false)
  const [fridayCount, setFridayCount] = useState(0)
  const [ceremonyCount, setCeremonyCount] = useState(0)
  const [receptionCount, setReceptionCount] = useState(0)

  // get all members
  useEffect(() => {
    if (!firstLoad){
      axios.get(`/api/auth/member/`)
      .then(res =>{console.log(res);sortByPartyAndSet(res.data.Members); setLoading(false); attendanceCount(); setFirstLoad(true)})
      .catch(err => console.error(err));
    }

  }, []);

  function sortByYesNo() {
    const sorted = [...members].sort((a, b) => {
      if (a.attendingReception === b.attendingReception) return 0;
      return a.attendingReception ? -1 : 1; // true first
    });
  
    setMembers(sorted);

  }

  function sortByPartyAndSet(members) {
    // groups: Map<normalizedPartyId, Member[]>
    const groups = new Map();

    members.forEach(member => {
      // safely read partyId and normalize it (trim, turn undefined -> special key)
      const raw = member?.party?.partyId;
      const key = raw === undefined || raw === null ? '__no_party__' : String(raw).trim();

      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(member);
    });

    // Sort the keys: numeric keys by numeric value, then fallback to localeCompare.
    const keys = Array.from(groups.keys()).sort((a, b) => {
      if (a === '__no_party__') return 1; // put no-party at the end
      if (b === '__no_party__') return -1;

      const aNum = Number(a);
      const bNum = Number(b);
      const aIsNum = !Number.isNaN(aNum);
      const bIsNum = !Number.isNaN(bNum);

      if (aIsNum && bIsNum) return aNum - bNum;
      // natural string comparison (handles "10" vs "2" better than plain lexicographical)
      return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
    });

    // Flatten groups in order of keys, preserving order inside each group
    const sorted = keys.flatMap(k => groups.get(k));

    setMembers(sorted);
  }

  // Make names uppercase 
  function capitalizeFirstLetter(name) {
    if (typeof name !== 'string' || name.trim().length === 0) {
      return name;
    }
  
    return name
      .split(/\s+/)         // split on any amount of whitespace
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  function attendanceCount(event) {
    return members.reduce((count, member) => {
      if (event === "friday" && member.attendingFriday) return count + 1;
      if (event === "ceremony" && member.attendingCeremony) return count + 1;
      if (event === "reception" && member.attendingReception) return count + 1;
      return count;
    }, 0);
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
    <div className="m-auto mt-8 overflow-x-auto overflow-y-auto h-[400px] w-full bg-white border-2 font-business">
      <div className="m-auto px-4 sm:px-6 lg:px-8">
        <table className="min-w-full text-center divide-y divide-gray-100">
          <thead>
            <tr className="divide-x divide-y divide-gray-300 p-2">
              <th scope="col" className="py-3.5 pr-4 pl-4 text-center text-sm font-semibold text-gray-900 sm:pl-0">
                #
              </th>
              <th scope="col" className="py-3.5 pr-4 pl-4 text-center text-sm font-semibold text-gray-900 sm:pl-0">
                Name
              </th>
              <th scope="col" className="px-4 py-3.5 text-center text-sm font-semibold text-gray-900">
                Party ID
              </th>
              <th scope="col" className="px-4 py-3.5 text-center text-sm font-semibold text-gray-900">
                Friday Dinner
              </th>
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
          {/* use divide-y and per-row border (no absolute w-screen lines) */}
          <tbody className="bg-white">
            {members.map((member, index) => (
              <tr key={member._id} className="last:border-b-0 divide-y divide-gray-300">
                <td className="px-3 py-4 text-sm text-gray-500 sm:table-cell">{index + 1}</td>
  
                <td className="py-4 pr-3 text-sm font-medium text-gray-900">
                  {capitalizeFirstLetter(member.firstName)}
                </td>
  
                <td className="px-3 py-4 text-sm text-gray-500 sm:table-cell">{member.party.partyId}</td>
  
                <td className={`"px-3 py-4 text-sm sm:table-cell" ${member.attendingFriday ? 'text-green-500' : 'text-black'}`}>
                  {boolToYesNo(member.attendingFriday)}
                </td>
  
                <td className={`"px-3 py-4 text-sm sm:table-cell" ${member.attendingCeremony ? 'text-green-500' : 'text-black'}`}>
                  {boolToYesNo(member.attendingCeremony)}
                </td>

                <td className={`"px-3 py-4 text-sm sm:table-cell" ${member.attendingReception ? 'text-green-500' : 'text-black'}`} >
                  {boolToYesNo(member.attendingReception)}
                </td>
  
                <td className="px-3 py-4 text-sm text-gray-500 md:table-cell">
                  {member.dietaryRestrictions}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  
    <div className="flex m-auto p-2 border-1 gap-6 items-center w-full font-business bg-black">
      <div className="m-auto">
        <div className="block sm:gap-20 text-blue-500">
          <h1 className="text-xl">Total: {members.length}</h1>
          <h1>Friday: {attendanceCount("friday")}</h1>
          <h1>Ceremony & Lunch: {attendanceCount("ceremony")}</h1>
          <h1>Reception: {attendanceCount("reception")}</h1>
          <button onClick={sortByYesNo} className="bg-white rounded-sm p-2">Sort By Yes</button>
        </div>
      </div>
    </div>
  </div>
  
  )
 }

export default GuestList