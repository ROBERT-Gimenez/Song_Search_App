import React, { useState } from 'react';
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
        <SongForm/>
        <SongDetail/>
    </div>
  )
};
export default SongSearch;
