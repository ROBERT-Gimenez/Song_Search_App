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
    <div className='control' >
        <h2>Formulario</h2>
        <form onSubmit={handleSubmit}>
            <div className='field'>
            <input className='control is-loading 20px'
            type="text" 
            name="artist" 
            placeholder="Nombre del interptrete" 
            onChange={handleChange}
            value={form.artist}
            />
            </div>
            <div className='field'> 
            <input className='control is-loading'
            type="text"
            name="song" 
            placeholder="Nombre de la cancion" 
            onChange={handleChange}
            value={form.song}
            />
            </div>
            <div className="field">
            <input className='button is-primary' type="submit" value="Enviar" />
            </div>
        </form>
    </div>
  )
}

export default SongForm;