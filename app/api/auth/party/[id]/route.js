import { ObjectId } from "mongodb";
import mongoClient from "@/app/lib/mongodb";
import Party from "@/app/models/Party";
import Member from "@/app/models/Member";
import { NextResponse } from 'next/server';

// Get party
export async function GET(req, context) {
  const params = await context.params;
  try {
    await mongoClient();
    const party = await Party.findOne({ partyId: params.id }).populate("members");
    return NextResponse.json({ party }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// Edit party
export async function PUT(req, context) {
  const params = await context.params;
  try {
    await mongoClient();
    const { members } = await req.json();

    if (!params?.id) {
      return NextResponse.json(
        { error: "Party ID is required" },
        { status: 400 }
      );
    }

    if (!members || !Array.isArray(members)) {
      return NextResponse.json(
        { error: "Members array is required" },
        { status: 400 }
      );
    }
    // Update all members in parallel
    try {
      await Promise.all(
        members.map((m) =>
          Member.findByIdAndUpdate(
            m._id,
            {
              attendingFriday: m.attendingFriday,
              attendingCeremony: m.attendingCeremony,
              attendingReception: m.attendingReception,
              dietaryRestrictions: m.dietaryRestrictions || "",
            },
            { new: true }
          )
        )
      );
    } catch (err) {
      console.log(err)
    }

    const updatedParty = await Party.findOne({ partyId: params.id }).populate("members");
    return NextResponse.json({ message: "Successfully saved!" }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// Delete party
export async function DELETE(req, context) {
  const params = await context.params;
  try {
    await mongoClient();
    const deletedParty = await Party.findByIdAndDelete(params.id);

    if (!deletedParty) {
      return NextResponse.json({ error: "Party not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Party deleted" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}