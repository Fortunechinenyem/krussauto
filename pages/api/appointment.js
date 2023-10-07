import { createAppointment, getAppointments } from "../../models/appointment";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const users = await getUsers();
      res.status(200).json(users);
    } else if (req.method === "POST") {
      const appointmentData = req.body;
      const appointmentId = await createAppointment(appointmentData);
      res.status(200).json({ appointmentId });
    } else if (req.method === "PUT") {
      res.status(200).json({ message: "Appointment updated" });
    } else if (req.method === "DELETE") {
      res.status(200).json({ message: "Appointment deleted" });
    } else if (req.method === "GET" && req.query.appointments) {
      const appointments = await getAppointments();
      res.status(200).json(appointments);
    } else {
      res.status(405).end();
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
