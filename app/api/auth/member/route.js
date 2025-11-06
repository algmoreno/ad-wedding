import { ObjectId } from "mongodb";
import mongoClient from "@/app/lib/mongodb";
import Member from "@/app/models/Member";
import Party from "@/app/models/Party";
import { NextResponse } from 'next/server';

// Create new Member
export async function POST(req){
  try {
    await mongoClient(); 
    const { partyId, firstName, lastName  } = await req.json();

    // Find the party
    const party = await Party.findOne({ partyId });
    if (!party) {
      return NextResponse.json({ error: "party not found" }, { status: 404 });
    }

    //creating new Member 
    const newMember = await Member.create({ party: party._id, firstName, lastName }); 
  
    // pushing Member object ref to party Member array
    party.members.push(newMember._id);
    await party.save();

    return NextResponse.json({ message: "Member added!" }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message, status: 500 });
  }
}

// Get all Members 
export async function GET() {
  try {
    await mongoClient();
    const Members = await Member.find().populate("party");
    return NextResponse.json({ Members },  { status: 201 });
  } catch (err) {
    return new NextResponse.json({ error: err.message, status: 500 });
  }
}