import React from "react";

//componenti
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer"
//Oggetto
import notes from "../notes";

function App() {
    return(
        <div>
            <Header />
            <section>
            {
                notes.map( note => 
                    <Note 
                    key={note.key}
                    title={note.title}
                    content={note.content}
                />
                )
            }
            </section>
            <Footer />
        </div>
    )
}

export default App;