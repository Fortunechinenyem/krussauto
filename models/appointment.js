import { connectToDatabase } from "../db/index";

export async function createAppointment(appointmentData) {
  const client = await connectToDatabase();
  const db = client.db("krussauto");
  const appointmentsCollection = db.collection("appointment");
  const result = await appointmentsCollection.insertOne(appointmentData);
  return result.insertedId;
}

export async function updateAppointment(appointmentId, newData) {
  const client = await connectToDatabase();
  const db = client.db("krussauto");
  const appointmentsCollection = db.collection("appointment");
  const result = await appointmentsCollection.updateOne(
    { _id: appointmentId },
    { $set: newData }
  );
  return result.modifiedCount > 0;
}

export async function getAppointments() {
  try {
    const client = await connectToDatabase();
    const db = client.db("krussauto");

    const appointments = await db.collection("appointment").find().toArray();

    client.close();

    return appointments;
  } catch (error) {
    console.error("Error fetching appointments:", error);
    throw error;
  }
}
