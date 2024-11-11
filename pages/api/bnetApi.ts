import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  const clientId = process.env.BNET_ID;
  const clientSecret = process.env.BNET_SECRET;
  console.log("Client ID in API Route:", process.env.BNET_ID);

  if (!clientId || !clientSecret) {
    return response
      .status(500)
      .json({ error: "Client ID or Secret not configured" });
  }

  try {
    const authResponse = await fetch("https://eu.battle.net/oauth/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${Buffer.from(
          `${clientId}:${clientSecret}`
        ).toString("base64")}`,
      },
      body: "grant_type=client_credentials",
    });

    console.log("authResponse: ", authResponse);

    const authData = await authResponse.json();

    if (!authResponse.ok) {
      return response.status(authResponse.status).json(authData);
    }

    response.status(200).json(authData);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    response.status(500).json({ error: "Failed to authenticate" });
  }
}
