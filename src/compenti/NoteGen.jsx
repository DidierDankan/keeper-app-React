import React, {useState} from "react";

function NoteGen(props) {
    const [newNote, setNewNote] = useState({
        title:"",
        content:""
    });
    
    
    function handleChange(event) {
       const {name, value} = event.target

       setNewNote(prevValue => {
           return {
               ...prevValue,
               [name]: value
           }
       })
    }


    return (
      <div>
        <form>
          <input onChange={handleChange} name="title" placeholder="Note title..." value={newNote.title}/>
          <textarea onChange={handleChange} name="content" placeholder="Note content..." value={newNote.content}>{newNote.content}</textarea>
          <button onClick={(event) => {
              props.addNote(newNote)
              setNewNote({
                title:"",
                content:"" 
              });
              event.preventDefault();
          }} type="submit">
            add
          </button>  
        </form>
      </div>
    )
}

export default NoteGen;