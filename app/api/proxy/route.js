// pages/api/proxy.js

export default async function handler(req, res) {
  console.log("!!!!!!!!!!!!!!!!!!!!");
  if (req.method === "POST") {
    try {
      const externalUrl =
        "https://script.google.com/macros/s/AKfycbyxe52qHfnfMvv5fxB2PorJoQmb-Fz9aqKj7KfGoQHGZAp5muPw9DrTli84cX1xcuNDmg/exec";

      const response = await fetch(externalUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      const data = await response.json();

      // Add CORS headers
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.status(200).json(data);
    } catch (error) {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.status(500).json({ message: "Error processing request", error });
    }
  } else if (req.method === "OPTIONS") {
    // Handle preflight requests
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.status(200).end();
  } else {
    res.setHeader("Allow", ["POST", "OPTIONS"]);
    console.log("heeereeee");
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
