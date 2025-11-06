import { ObjectId } from "mongodb";
import mongoClient from "@/app/lib/mongodb";
import Party from "@/app/models/Party";
import { NextResponse } from 'next/server';

// Create new party
export async function POST(req){
  console.log("new party request")
  try {
    await mongoClient(); 
    const { partyId, fridayInvite } = await req.json();

    const partyExists = await Party.findOne({ partyId });
    if (partyExists) {
      return NextResponse.json({ message: "PartyId already in use." }, { status: 400 })
    }

    const party = {
      partyId, 
      fridayInvite, 
    }

    const newParty = await Party.create(party); 
    return NextResponse.json({ message: "Party successfully registered!" }, { status: 201 });
  } catch (err) {
    console.error('Error inserting party:', err);
    return NextResponse.json({ message: "Something went wrong." },  { status: 500 });
  }
}

// Get all parties
export async function GET() {
  try {
    await mongoClient();
    const parties = await Party.find();
    return NextResponse.json({ parties },  { status: 201 });
  } catch (err) {
    console.error('Error finding parties:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
