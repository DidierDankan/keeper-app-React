import React, {useState} from "react";

//componenti
import Header from "./Header";
import NoteGen from "./NoteGen";
import Note from "./Note";
import Footer from "./Footer"


function App() {

    const [notes, setNotes] = useState([])

    //add notes
    function addNote(newNote) {
        setNotes(prevNotes => {
            return [...prevNotes, newNote]
        })
    };

    //delete notes
    function deleteNote(id) {
        setNotes(prevNotes => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            })
        })
    };

    return(
        <div>
            <Header />
            <NoteGen addNote={addNote}/>
            <section>
            {
                notes.map( (note,index) => 
                    (<Note 
                    key={index}
                    id={index}
                    title={note.title}
                    content={note.content}
                    onChecked={deleteNote}
                    />)
                )
            }
            </section>
            <Footer />
        </div>
    )
}

export default App;