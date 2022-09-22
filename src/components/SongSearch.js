import React, { useState } from 'react';
import Loader from './Loader';
import SongDetail from './SongDetail';
import SongForm from './SongForm';

const SongSearch = () => {
    const [search,setSearch] = useState(null);
    const [lyric,setLyric] = useState(null);
    const [bio,setBio] = useState(null);
    const [loading,setLoading] = useState(false);

    const handleSearch = (data) => {
        console.log(data);
        setSearch(data);
    }

  return (
    <div>
        <h2>SongSearch</h2>
        {loading &&<Loader/>}
        <SongForm handleSearch={handleSearch} />
        <SongDetail search={search} lyric={lyric} bio={bio}/>
    </div>
  )
};
export default SongSearch;
