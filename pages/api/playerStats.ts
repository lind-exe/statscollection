import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { accessToken } = req.query;

  if (!accessToken) {
    return res.status(400).json({ error: "Access token is required" });
  }

  try {
    const characterRealm = "draenor";
    const characterName = "outtatime";

    const response = await fetch(
      `https://us.api.blizzard.com/profile/wow/character/${characterRealm}/${characterName}/pvp-summary?namespace=profile-us&locale=en_EU`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: data.error || "Failed to fetch WoW data" });
    }

    res.status(200).json(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
