// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// This will soon be a personal API endpoint for stats about myself
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'DevComp'} )
}
