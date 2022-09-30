import React from 'react'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'
import Message from './Message'

export default function SongDetail({search,lyric,bio}) {
    if(!lyric||!bio){return null};
    console.log(lyric)
    

    return (
    <div>
         {lyric.error ||lyric.err|| lyric.name ==="AbortError" ?
        <Message msg={`Error:no existe "${search.song}"`} bgColor="#dc3545" />
        :<SongLyric title={search.song} lyrics={lyric.lyrics} />}
        {bio.artists?
        <SongArtist artist={bio.artists[0]}/>
        :<Message  msg={`Error:no existe el interprete "${search.artist}"`} bgColor="#dc3545" />} 
    </div>
  )
}
