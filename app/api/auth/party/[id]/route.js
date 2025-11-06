import { ObjectId } from "mongodb";
import mongoClient from "@/app/lib/mongodb";
import Party from "@/app/models/Party";
import { NextResponse } from 'next/server';

// Get party
export async function GET(req, context) {
  const params = await context.params;
  try {
    await mongoClient();
    const party = await Party.findById(params.id).populate("members")

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
    const { firstName, lastName, email, password, confirmPassword } = await req.json();

    if (!params || !params.id) {
      return NextResponse.json({ error: "Party ID is required" }, { status: 400 });
    }

    const hashedPwd = await bcrypt.hash(password, 10);

    const party = {
      firstName, 
      lastName, 
      email, 
      password: hashedPwd
    }

    const updatedParty = await Party.findByIdAndUpdate(params.id, party, { new: true })

    return NextResponse.json({ message: "Party updated" }, { status: 200 });
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