// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// This will soon be a personal API endpoint for stats about myself

import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

type Data = {
  name: string
  commits: Promise<any>
}

async function fetched(){
  const raw_commits = await axios.get('https://api.github.com/search/commits?q=author:CompeyDev&sort=author-date&order=desc&page=1')
  const gh_commits = raw_commits.data.total_count
  const raw_music = await axios.get(`https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&limit=1&user=DevComp&api_key=${process.env.LASTFM_API_KEY}&format=json`)
  const songs_array = raw_music.data
  const songs_number = songs_array.recenttracks['@attr'].total
  type data = {
    name: string
    commits: Promise<any>
    songs: Promise<any>
  }
  let json: data
  json = { name: 'DevComp', commits: gh_commits, songs: songs_number }
  return json
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(await fetched())
}

