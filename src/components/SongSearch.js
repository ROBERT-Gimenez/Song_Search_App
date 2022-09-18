import React, { useState } from 'react';
import Loader from './Loader';
import SongDetail from './SongDetail';
import SongForm from './SongForm';

const SongSearch = () => {
    const [search ,setSearch] = useState(null);
    const [lyris ,setLyris] = useState(null);
    const [bio ,setBio] = useState(null);
    const [loading ,setLoading] = useState(false);
  return (
    <div>
        <h2>SongSearch</h2>
        {loading &&<Loader/>}
        <SongForm/>
        <SongDetail/>
    </div>
  )
};
export default SongSearch;
