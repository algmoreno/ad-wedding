import { ObjectId } from "mongodb";
import mongoClient from "@/app/lib/mongodb";
import Member from "@/app/models/Member";
import Party from "@/app/models/Party";
import { NextResponse } from 'next/server';

// Get party members
export async function GET(req, context) {
  const params = await context.params;
  try {
    await mongoClient();
    const member = await Member.findById(params.id).populate("party");

    if (!member) {
      return NextResponse.json({ message: "member not found" }, { status: 404 });
    }

    return NextResponse.json({ member }, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// Edit member
export async function PUT(req, context) {
  const params = await context.params;
  try {
    await mongoClient();
    const update = await req.json();
    const updatedMember = await Member.findByIdAndUpdate(params.id, update, { new: true });

    if (!updatedMember) {
      return NextResponse.json({ message: "Member not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Member updated" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

// Delete member
export async function DELETE(req, context) {
  const params = await context.params;
  try {
    await mongoClient();
    const { partyId } = await req.json();
    const deletedMember = await Member.findByIdAndDelete(params.id);

    if (!deletedMember) {
      return NextResponse.json({ message: "Member not found" }, { status: 404 });
    }

    await Party.findByIdAndUpdate(partyId, {
      $pull: { members: params.id }
    });

    return NextResponse.json({ message: "Member deleted" }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}