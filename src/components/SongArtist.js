import React from 'react'

function SongArtist({artist}) {
  return (
    <section className="container" style={{padding:'1rem'}}>
        <h3>{artist.strArtist}</h3>
        <div className='card-content is-flex is-horizontal-center'>
        <figure class="image is-128x128">
        <img className='is-rounded' src={artist.strArtistThumb} alt={artist.strArtist} />
        </figure>
        </div>
        <p>{artist.intBornYear}-{artist.intDiedYear || "Presente"}</p>
        <p>{artist.strCountry}</p>
        <p>{artist.strGenre}-{artist.strStyle}</p>
        <a href={`http//${artist.strWebsite}`} target="__blank" rel='noreferrer'>Sitio Web</a>
        <p>{artist.strBiographyEN}</p>
    </section>
  )
}

export default SongArtist;