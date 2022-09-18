import React from 'react'
import SongArtist from './SongArtist'
import SongLiric from './SongLyric'

export default function SongDetail({search,lyric,bio}) {
  return (
    <div>
        <h2>Detalle</h2>
        <SongArtist/>
        <SongLiric/>
    </div>
  )
}
