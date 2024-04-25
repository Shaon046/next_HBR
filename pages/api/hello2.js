// import fetch from "isomorphic-unfetch";

// export default async function handler(req, res) {
//   if (req.method === "POST") {
//     const state = req.body;
//     console.log("Received form data:", state);
//     const dataToSend = {
//       candidateName: state.candidateName,
//       contactNumber: state.contactNumber,
//       alternateNumber: state.alternateNumber,
//       emailID: state.emailID,
//       currentLocation: state.currentLocation,
//       landmark: state.landmark,
//       qualification: state.qualification,
//       currentCompany: state.currentCompany,
//     };
//     try {
//       const saveCandidateUrl =
//         "https://crm.hirewynk.com/api/save_candidate_data"; // Replace with the actual URL of your other backend

//       const response = await fetch(saveCandidateUrl, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ formData: state }), // Sending the formData under the key "formData" as expected by the other backend
//       });

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
      const newEndpointUrl = "https://crm.hirewynk.com/api/save_candidate_data"; // Replace with your actual new endpoint URL

      const dataToSend = {
        formData: {
          candidateName: state.candidateName,
          contactNumber: state.contactNumber,
          alternateNumber: state.alternateNumber,
          emailID: state.emailID,
          currentLocation: state.currentLocation,
          landmark: state.landmark,
          qualification: state.qualification,
          currentCompany: state.currentCompany,
        },
      };
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
