// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { generateKey } from "../../apiUtils/limiter"

export default function handler(req, res) {
  try {

    res.status(200).json({ key: generateKey() })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
}
