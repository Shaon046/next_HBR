// import { NextResponse } from "next/server";

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

// pages/api/endpoint.js

// import fetch from "isomorphic-unfetch"; // Import fetch for making HTTP requests
// import axios from "axios";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const state = req.body;
//     console.log("Received form data:", state);

//     try {
//       // Make an HTTP POST request to the webhook URL with the form data
//       const saveCilentUrl = "https://crm.hirewynk.com/api/save_client_data"; // Replace with your actual webhook URL
//       // const dataToSend = {
//       //   formData: {
//       //     firstName: state.firstName,
//       //     lastName: state.lastName,
//       //     company: state.company,
//       //     email: state.businessMail,
//       //     contactNumber: state.phoneNumber,
//       //     designation: state.designation,
//       //     solution: state.solution,
//       //     message: state.requirment,
//       //   },
//       // };
//       const dataToSend = {
//         formData: {
//           firstName: "Rahul",
//           lastName: "kumar",
//           company: "HBR",
//           email: "rk@gmail.com",
//           contactNumber: "0987654321",
//           designation: "Developer",
//           solution: "this is the solutions",
//           message: "This is text message.",
//         },
//       };
//       console.log("Data to Send: ", dataToSend);
//       // const response = await fetch(saveCilentUrl, {
//       //   method: "POST",
//       //   headers: {
//       //     "Content-Type": "application/json",
//       //   },
//       //   body: dataToSend, // Sending the formData under the key "formData" as expected by the other backend
//       // });
//       const response = await axios.post(saveCilentUrl, {
//         dataToSend,
//       });

//       // Check if the request was successful
//       if (response.ok) {
//         res.status(200).json({ message: "Data sent to backend successfully" });
//       } else {
//         res.status(500).json({ error: "Failed to send data to backend" });
//       }
//     } catch (error) {
//       console.error("Error sending data to backend:", error);
//       res.status(500).json({ error: "Failed to send data to backend" });
//     }
//   } else {
//     res.setHeader("Allow", ["POST"]);
//     res.status(405).end(`Method ${req.method} Not Allowed`);
//   }
// }

import fetch from "isomorphic-unfetch"; // Import fetch for making HTTP requests
import axios from "axios"; // Import axios for making HTTP requests

export default async function handler(req, res) {
  if (req.method === "POST") {
    const state = req.body; // Extract data from the request body
    console.log("Received form data:", state);

    try {
      // Define the new endpoint URL
      const newEndpointUrl = "https://crm.hirewynk.com/api/save_client_data"; // Replace with your actual new endpoint URL

      // Format the data as required by the new endpoint
      const dataToSend = {
        formData: {
          firstName: state.firstName,
          lastName: state.lastName,
          company: state.company,
          email: state.businessMail,
          contactNumber: state.phoneNumber,
          designation: state.designation,
          solution: state.solution,
          message: state.requirment,
        },
      };
      // const dataToSend = {
      //   formData: {
      //     firstName: "Rahul",
      //     lastName: "kumar",
      //     company: "HBR",
      //     email: "rk@gmail.com",
      //     contactNumber: "0987654321",
      //     designation: "Developer",
      //     solution: "this is the solutions",
      //     message: "This is text message.",
      //   },
      // };
      console.log("Data to Send to New Endpoint: ", dataToSend);

      // Make an HTTP POST request to the new endpoint with the formatted data
      const response = await axios.post(newEndpointUrl, dataToSend);

      // Check if the request was successful
      if (response.status === 200) {
        // Using `response.status` with axios
        res
          .status(200)
          .json({ message: "Data sent to new endpoint successfully" });
      } else {
        res.status(500).json({ error: "Failed to send data to new endpoint" });
      }
    } catch (error) {
      console.error("Error sending data to new endpoint:", error);
      res.status(500).json({ error: "Failed to send data to new endpoint" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
