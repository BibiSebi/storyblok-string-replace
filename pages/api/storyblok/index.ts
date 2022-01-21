import { NextApiRequest, NextApiResponse } from "next";
import { NotFound } from "../../../constants/errors";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  return res.status(404).json(NotFound);
}
