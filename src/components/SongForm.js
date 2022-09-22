import React ,{useState} from 'react'

const initialFomr ={
    artist:"",
    song:"",
}

function SongForm({handleSearch}) {
const [form,setForm] =useState(initialFomr);

const handleChange = (e) => {
setForm({...form,[e.target.name]:e.target.value});
}

const handleSubmit = (e) => {
    e.preventDefault();

    if(!form.artist || !form.song){
        alert("Datos Incompletos");
        return
    }

    handleSearch(form);
    setForm(initialFomr);
}

  return (
    <div>
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="artist" 
            placeholder="Nombre del interptrete" 
            onChange={handleChange}
            value={form.artist}
            />
            <input type="text"
            name="song" 
            placeholder="Nombre de la cancion" 
            onChange={handleChange}
            value={form.song}
             />
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default SongForm